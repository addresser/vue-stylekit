<script type="text/jsx">
export default {
  name: "RtRowList",
  props: {
    isProfitList: {
      type: Boolean,
      default: false
    },
    columnsQuantity: {
      type: Number,
      default: 1
    },
    companyProfits: {
      type: Boolean,
      default: false
    },
    isHowItWorksBlock: {
      type: Boolean,
      default: false
    },
    isHelpBlock: {
      type: Boolean,
      default: false
    },
    contentBlockType: {
      type: Boolean,
      default: false
    },
    iconSize: {
      type: String,
      default: ''
    },
    alignLeft: {
      type: Boolean,
      default: false
    }
  },
  render(h){

    const listType = (() => {
      if(this.isProfitList) {
        return <div class={"rt-row-list" + (this.isProfitList ? " rtb-profit-list" : "")}>
          <div class="rt-container rt-col-12">
            <div class="row">
              {this.$slots.default}
            </div>
          </div>
        </div>;
      } else {
        return <div class="rt-row-list row">
          {this.$slots.default}
        </div>;
      }
    })();

    return <div>{listType}</div>;
  }
};
</script>
