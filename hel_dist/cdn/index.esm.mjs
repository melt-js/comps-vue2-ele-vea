import { exposeLib } from 'hel-lib-proxy';

/*
|--------------------------------------------------------------------------
|
| 对应 package.json/appGroupName
|
|--------------------------------------------------------------------------
*/

const LIB_NAME = 'comps-vue2-ele-vea';

/*
|--------------------------------------------------------------------------
|
| 组件类型导出文件，同时也作为 rollup 的打包入口文件，rollup 打包后是一个
| 仅包含 hel-lib-proxy 的轻量代理文件，不包含组件实现
| 模块使用方 通过 npm i xxx-lib 后，只要在头文件处执行过 preFetchLib
| 则整个项目项使用本地模块一样载入提供方的组件，并可以点击到 node_modules 查看源码
|
| 本包只收 vue-element-admin 来源的页面级组件与 Excel 导出工具；
| think-vuele 的 Tc* 组件库与 App/HelloWorld/TierRanking 留在 @melt-js/comps-vue2-ele。
|
|--------------------------------------------------------------------------
*/
/**
 * 将提供给用户的lib暴露出去（同时也暴露了类型）
 */
var dtlib = exposeLib(LIB_NAME);
var Pagination = dtlib.Pagination;
var Sticky = dtlib.Sticky;
var BackToTop = dtlib.BackToTop;
var DndList = dtlib.DndList;
var Kanban = dtlib.Kanban;
var DragSelect = dtlib.DragSelect;
var UploadExcel = dtlib.UploadExcel;
var AdminChart = dtlib.AdminChart;
var RouteTabs = dtlib.RouteTabs;
var exportJsonToExcel = dtlib.exportJsonToExcel;

export { AdminChart, BackToTop, DndList, DragSelect, Kanban, Pagination, RouteTabs, Sticky, UploadExcel, dtlib as default, dtlib, exportJsonToExcel };
