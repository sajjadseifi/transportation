import { DEGREE, PER_DEGREE } from "../../constants";

export default Object.keys(DEGREE).map((dk) => {
    return {
        value: DEGREE[dk], label: PER_DEGREE[dk]
    };
});