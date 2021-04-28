import { agentAxios } from ".";

const listParams = {
    pageNumber: 0,
    pageSize: 0,
    search: "",
}
export default {
    list: (params = listParams, config = {}) => agentAxios.get(`/course/list?pagenumber=${params.pageNumber}&pagesize=${params.pageSize}`, config),
};
