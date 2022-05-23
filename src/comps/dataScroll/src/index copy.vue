<template>
  <div class="ht-data-scroll">
    <table v-if="header" ref="header" class="ht-table ht-data-head">
      <ListColGroup :columns="tableColumns" :default-width="cellWidth"></ListColGroup>
      <thead>
        <tr>
          <th v-for="(col, index) in tableColumns" :key="`tr_${_uid}_col_${index}`">
            <slot name="column" :col="col" :index="index">
              {{col.label}}
            </slot>
          </th>
        </tr>
      </thead>
    </table>
    <ht-marquee ref="marquee" :data="rows" :style="bodyStyle" @resize="marqueeResize" v-bind="scrollProps">
      <table v-if="rows.length" class="ht-table ht-data-body">
        <ListColGroup :columns="tableColumns" :default-width="cellWidth"></ListColGroup>
        <tr v-for="(row, rowIndex) in rows" :key="`row_${rowIndex}`">
          <td v-for="(item, itemIndex) in getRow(row)" :key="`item_${itemIndex}`">
            <slot :name="getSlotName(itemIndex)" :row="row" :item="item" :index="itemIndex" :rowIndex="rowIndex">
              {{item}}
            </slot>
          </td>
        </tr>
      </table>
    </ht-marquee>
  </div>
</template>

<script>
import ListColGroup from "./ColGroup";
export default {
  name: "htDataScroll",
  components: {
    ListColGroup,
  },
  props: {
    columns: {
      type: Array,
      default() {
        return [];
      },
    },
    rows: {
      type: Array,
      default() {
        return [];
      },
    },
    header: {
      type: Boolean,
      default: true,
    },
    scroll: [Boolean, Object],
  },
  data() {
    return {
      headerHeight: 0,
      headerWidth: 0,
    };
  },
  computed: {
    tableColumns() {
      return this.columns.map((col) => {
        return typeof col === "object" ? col : { label: col };
      });
    },
    cellWidth() {
      let total = this.headerWidth;
      let count = 0;
      this.tableColumns.forEach((n) => {
        if (n.width || n.minWidth) {
          total -= n.width || n.minWidth || 0;
        } else {
          ++count;
        }
      });
      return count > 0 ? total / count : 0;
    },

    bodyStyle() {
      return {
        height: `calc(100% - ${this.headerHeight}px)`,
      };
    },
    scrollProps() {
      return {
        disabled: !this.scroll,
        speed: 0.5,
        ...this.scroll,
      };
    },
    
  },
  watch: {
    header() {
      this.updateHeaderHeight();
    },
  },
  methods: {
    getRow(row) {
      if (Array.isArray(row)) {
        return row;
      }
      return this.tableColumns.map((col) => row[col.prop]);
    },
    getSlotName(itemIndex) {
      const col = this.tableColumns[itemIndex];
      return col?.prop;
    },
    updateHeaderHeight() {
      const rect = this.$refs?.header?.getBoundingClientRect();
      this.headerHeight = rect ? rect.height : 0;
      this.headerWidth = rect ? rect.width : 0;
      if (this.$refs.marquee) {
        this.$nextTick(this.$refs.marquee.renderCopyHtml);
      }
    },
    marqueeResize() {},
  },
  mounted() {
    // console.log(this.$slots)
    // console.log(this.$attrs)
    this.updateHeaderHeight();
  },
};
</script>
<style lang="scss" scoped>
@import "../../../assets/styles/variables.scss";
@import "../../../assets/global/mixins/utils.scss";
.ht-data-scroll {
  padding-left: 10px;
  height: 100%;
  overflow: auto;
  .ht-table {
    // table-layout: fixed;
    border-collapse: separate;
    // border-spacing: 0 10px;
    tr {
      border-radius: 4px;
      border: solid 1px #32b8db;
      color: #fff;
      td {
        padding: 5px 0px;
        // background-color: rgba(97, 140, 173, 0.5);
        @include utils-ellipsis;
      }
    }
  }
}
</style>
