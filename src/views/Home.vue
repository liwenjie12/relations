<template>
  <div class="relations app-container">
    <div id="canvas"></div>
    <div class="tree-icon" @click="toggleTree">
      <i class="fa fa-tree"></i>
    </div>
  </div>
</template>

<script>
// import graphVis from "@/utils/graphVis/visgraph.min.js";
// import graphLayout from "@/utils/graphVis/visgraph-layout.min.js";
import G6 from "@antv/g6";
// import { getSignParams, getSign } from '@/utils/password/shareCommon-pre'

// let o = getSignParams({openId:'122',accessKeyId: '24234'})
// getSign(o, 'sh')

let data = {
  nodes: [
    {
      id: "1",
      label: "刘备",
      cluster: "a",
      type: "project",
    },
    {
      id: "2",
      label: "关羽",
      cluster: "a",
      type: "testType",
    },
    {
      id: "3",
      label: "张飞",
      cluster: "a",
      type: "testItem",
    },
    {
      id: "4",
      label: "曹操",
      cluster: "a",
      type: "usercase",
    },
    {
      id: "5",
      label: "孙权",
      cluster: "a",
      type: "usercase",
    },
    {
      id: "6",
      label: "吕蒙",
      cluster: "a",
      type: "project",
    },
  ],

  edges: [
    {
      source: "1",
      target: "2",
      label: "大哥",
    },
    {
      source: "2",
      target: "3",
      label: "大哥",
    },
    {
      source: "3",
      target: "4",
      label: "大哥",
    },
    {
      source: "3",
      target: "5",
      label: "大哥",
    },
  ],
};

export default {
  data() {
    return {
      isTree: false,
      graph: null,
    };
  },
  methods: {
    notTree() {
      const container = document.getElementById("canvas");
      const width = container.scrollWidth;
      const height = container.scrollHeight || 500;
      this.graph = new G6.Graph({
        container: "canvas",
        width,
        height,
        // linkCenter: true,
        // fitCenter: true,
        modes: {
          default: [
            "drag-canvas",
            "zoom-canvas",
            "collapse-expand-combo",
            "drag-combo",
            {
              type: "activate-relations",
              trigger: "click",
            },
            "drag-node",
            "highlight-node",
            "click-select",
          ],
        },
        defaultNode: {
          size: 26,
        },
        layout: {
          type: "fruchterman",
          gravity: 10,
          speed: 5,
          // for rendering after each iteration
          tick: () => {
            this.graph.refreshPositions();
          },
        },

        // animate: true
      });

      this.graph.node(function(node) {
        let color = node.id === "1" ? "rgba(255, 0, 0, 0.5)" : "#40feff";
        return {
          label: node.id,
          style: {
            fill: color,
          },
          stateStyles: {
            selected: {
              fill: "rgb(255, 255, 255)",
              lineWidth: 4,
              shadowBlur: 10,
              shadowColor: color,
              stroke: color,
            },
          },
        };
      });

      this.graph.data(data);
      this.graph.render();
      // graph.fitView();

      if (typeof window !== "undefined")
        window.onresize = () => {
          if (!this.graph || this.graph.get("destroyed")) return;
          if (!container || !container.scrollWidth || !container.scrollHeight)
            return;
          this.graph.changeSize(container.scrollWidth, container.scrollHeight);
        };
    },

    tree() {
      let data = this.toTreeData();
      const container = document.getElementById("canvas");
      const width = container.scrollWidth;
      const height = container.scrollHeight || 500;
      this.graph = new G6.TreeGraph({
        container: "canvas",
        width,
        height,
        linkCenter: true,
        animate: true,
        modes: {
          default: [
            // {
            //   type: "collapse-expand",
            //   trigger: "dblclick",
            //   onChange: function onChange(item, collapsed) {
            //     const data = item.get("model");
            //     data.collapsed = collapsed;
            //     return true;
            //   },
            // },
            // {
            //   type: "activate-relations",
            //   trigger: "click",
            //   resetSelected: true,
            // },
            "highlight-node",
            "drag-canvas",
            "zoom-canvas",
            "drag-node",
          ],
        },
        defaultNode: {
          size: 26,
          anchorPoints: [[0, 1]],
        },
        defaultEdge: {
          type: "line-dash",
          style: {
            endArrow: {
              path: G6.Arrow.triangle(8, 8, 12), // 使用内置箭头路径函数，参数为箭头的 宽度、长度、偏移量（默认为 0，与 d 对应）
              d: 12,
              fill: "#888",
              // opacity: 0.5,
              // lineWidth: 3,
              // ...
            },
            startArrow: {
              path: G6.Arrow.triangle(0, 0, 12), // 使用内置箭头路径函数，参数为箭头的 宽度、长度、偏移量（默认为 0，与 d 对应）
              d: 12,
              fill: "#888",
            },
          },
        },
        layout: {
          // type: "compactBox",
          // direction: "RL",
          // getId: function getId(d) {
          //   return d.id;
          // },
          // getHeight: () => {
          //   return 26;
          // },
          // getWidth: () => {
          //   return 26;
          // },
          // getVGap: () => {
          //   return 20;
          // },
          // getHGap: () => {
          //   return 30;
          // },
          // radial: true,
          type: "dendrogram",
          direction: "LR",
          nodeSep: 20,
          rankSep: 100,
          radial: true,
        },
      });

      this.graph.node(function(node) {
        let color =
          node.id === "1" ? "rgba(255, 0, 0, 0.5)" : "rgba(115, 154, 255, 0.1)";
        return {
          label: node.id,
          style: {
            fill: color,
          },
          stateStyles: {
            selected: {
              fill: "rgb(255, 255, 255)",
              lineWidth: 4,
              shadowBlur: 10,
              shadowColor: color,
              stroke: color,
            },
            active: {
              fill: "#ffbd0f",
              lineWidth: 4,
              shadowBlur: 10,
              // shadowColor: color,
              stroke: "#ffbd0f",
            },
          },
        };
      });

      this.graph.edge(edge => {
        console.log(this.graph.findById(edge.source))
        let data = this.graph.findById(edge.source).getModel()
        console.log(data.rol? data.rol : '')
        return {
          label: data.rel? data.rel : '',
          autoRotate: true
        }
      })

      this.graph.data(data);
      this.graph.render();
      this.graph.fitCenter();
      let item = this.graph.findById("parent");
      this.graph.hideItem(item);

      if (typeof window !== "undefined")
        window.onresize = () => {
          if (!this.graph || this.graph.get("destroyed")) return;
          if (!container || !container.scrollWidth || !container.scrollHeight)
            return;
          this.graph.changeSize(container.scrollWidth, container.scrollHeight);
        };
    },

    toggleTree() {
      this.graph.clear();
      this.graph.destroy();
      this.isTree = !this.isTree;
    },

    toTreeData() {
      return {
        id: "parent",
        children: [
          {
            id: "1",
            label: "刘备",
            cluster: "a",
            type: "project",
            children: [
              {
                id: "2",
                label: "关羽",
                cluster: "a",
                type: "testType",
                rel: '23',
                children: [
                  {
                    id: "3",
                    label: "张飞",
                    cluster: "a",
                    type: "testItem",
                    children: [
                      {
                        id: "4",
                        label: "曹操",
                        cluster: "a",
                        type: "usercase",
                        children: [],
                      },
                      {
                        id: "5",
                        label: "孙权",
                        cluster: "a",
                        type: "usercase",
                        children: [],
                      },
                      {
                        id: "8",
                        label: "司马懿",
                        cluster: "a",
                        type: "project",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "6",
            label: "吕蒙",
            cluster: "a",
            type: "project",

            children: [
              {
                id: "7",
                label: "孙策",
                cluster: "a",
                type: "project",
              },
            ],
          },
        ],
      };
    },

    relationsBehavior() {
      G6.registerBehavior("highlight-node", {
        getDefaultCfg() {
          return {
            nodes: [],
            edges: [],
            timer: null,
          };
        },
        getEvents() {
          return {
            "node:contextmenu": "onNodeClick",
            "node:dblclick": "onNodeDblclick",
            "canvas:click": "onResetStatus",
          };
        },
        onResetStatus() {
          const graph = this.graph;

          this.nodes.forEach((node) => {
            if (node.destroyed) return;
            graph.setItemState(node, "active", false);
          });
          this.edges.forEach((edge) => {
            graph.setItemState(edge, "active", false);
            graph.setItemState(edge, "running", false);
          });

          this.nodes = [];
          this.edges = [];
        },

        onNodeClick(e) {
          if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
            return;
          }

          this.timer = setTimeout(() => {
            this.highLightNodeAndEdge(e);
          }, 150);
        },

        highLightNodeAndEdge(e) {
          console.log(1);
          const graph = this.graph;
          const item = e.item;
          if (!item) return;
          const model = item.getModel();
          this.onResetStatus();

          this.edges = item.getEdges();
          this.edges.forEach((edge) => {
            let edgeModel = edge.getModel();
            console.log(edgeModel, "edgeModel");
            if (edgeModel.source === model.id) {
              this.nodes.push(graph.findById(edgeModel.target));
            }
            graph.setItemState(edge, "active", true);
            graph.setItemState(edge, "running", true);
          });
          this.nodes.push(...item.getNeighbors());
          this.nodes.push(item);

          this.nodes.forEach((node) => {
            graph.setItemState(node, "active", true);
          });

          this.timer = null;
        },

        onNodeDblclick(e) {
          let item = e.item;
          var sourceData = this.graph.findDataById(item.get("id"));

          if (!sourceData || !item) {
            return;
          }

          var children = sourceData.children; // 叶子节点的收缩和展开没有意义

          if (!children || children.length === 0) {
            return;
          }
          var collapsed = !sourceData.collapsed;
          if (!this.shouldBegin(e, collapsed)) {
            return;
          }

          sourceData.collapsed = collapsed;
          item.getModel().collapsed = collapsed;

          if (!this.shouldUpdate(e, collapsed)) {
            return;
          }
          
          setTimeout(() => {
            this.graph.layout();
          }, 60)
        },
      });
    },

    relationsEdge() {
      const lineDash = [4, 2, 1, 2];
      G6.registerEdge(
        "line-dash",
        {
          setState(name, value, item) {
            const shape = item.get("keyShape");
            if (name === "running") {
              if (value) {
                let index = 0;
                shape.attr("stroke", "#409eff");
                shape.animate(
                  () => {
                    index++;
                    if (index > 9) {
                      index = 0;
                    }
                    const res = {
                      lineDash,
                      lineDashOffset: -index,
                    };
                    // return the params for this frame
                    return res;
                  },
                  {
                    repeat: true,
                    duration: 3000,
                  }
                );
              } else {
                shape.stopAnimate();
                shape.attr("lineDash", null);
                shape.attr("stroke", "rgb(224,224,224)");
              }
            }
          },
        },
        "line" // extend the built-in edge 'cubic'
      );
    },
  },
  mounted() {
    this.relationsEdge();
    this.relationsBehavior();
    this.notTree();
  },

  watch: {
    isTree(n) {
      n ? this.tree() : this.notTree();
    },
  },
};
</script>

<style lang="scss">
.relations {
  position: relative;
  overflow: hidden;

  #canvas {
    height: 100%;
  }

  .tree-icon {
    width: 120px;
    height: 80px;
    background: #13ce66;
    position: absolute;
    top: -25px;
    right: -47px;
    transform: rotate(45deg);
    cursor: pointer;
    display: flex;
    justify-content: center;

    i {
      margin-top: 44px;
      color: white;
      font-size: 20px;
      transform: rotate(-45deg);
    }
  }
}
</style>
