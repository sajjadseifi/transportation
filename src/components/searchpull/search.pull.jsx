import React, { useCallback, useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchPullInput } from ".";
import SearchItme from "./search-item/search-item";
import { Loader } from "rsuite";
import "./search.pull.scss";
import { listActions } from "../../@redux/actions";

const SearchPull = ({
  name,
  keyList,
  agentList,
  searchLabel,
  title,
  placeholder,
  disabled,
  SingleComponet = SearchItme,
  SearchInput = SearchPullInput,
  ...inputProps
}) => {
  const inpSearchref = useRef();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const { lists } = useSelector((state) => state.list);
  const [display, setDisPlay] = useState(inputProps.input.value ||searchLabel || "");
  const list = lists[keyList];
  const loading = list ? list.loading : false;
  const initLaoding = !lists[keyList];

  const [show, setShow] = useState(false);
  const [data, setData] = useState([
    { key: 1, value: "sajjadseifit" },
    { key: 2, value: "shyn48" },
    { key: 3, value: "hossey" },
    { key: 4, value: "sggg" },
    { key: 5, value: "s" },
    { key: 5, value: "sodf" },
    { key: 5, value: "fgf" },
    { key: 5, value: "tghgfb" },
  ]);
  const dispatch = useDispatch();
  const onChangeSearch = (val) => {};
  useEffect(() => {
    onPullRequest();
  }, [dispatch,agentList]);
  useEffect(() => {
    let d = [];
    if (list) d = [...lists[keyList].data];
    setData(d);
  }, [lists]);

  const selectedItem = (inpValue, searchValue) => {
    setDisPlay(searchValue);
    onBlur();
    inputProps.input.onChange({ target: { value: inpValue } });
  };
  
  //send rqeuest with multy options
  const onPullRequest = useCallback(
    (search) => {
      // if (!agentList) return;
      const getOptinos = {
        keyList,
        agentGet: agentList,
        pageNumber: page,
        pageSize: pageSize,
        search: search,
      };
      dispatch(listActions.loadList(getOptinos));
    },
    [dispatch, page, pageSize, listActions.loadList]
  );
  const onBlur = () => setShow(false);
  const onFocus = () => setShow(true);

  return (
    <div className="search-pull-box">
      <input className="d-none" {...inputProps.input} />
      <SearchInput
        {...{
          ref: inpSearchref,
          onBlur,
          onFocus,
          placeholder,
          title,
          disabled
        }}
        pullRequest={onPullRequest}
        value={display}
      />
      <div
        className={`search-list-container
       ${show ? "show" : "close"}`}
      >
        {data && data.length > 0 && (
          <ul className="search-list">
            {data.map((data) => (
              <li className="search-list-item">
                <SingleComponet onSelect={selectedItem} data={data} />
              </li>
            ))}
          </ul>
        )}
        {loading && (
          <div className="rever-data-loader d-flex align-items-center justify-content-center">
            <Loader speed="fast" className="2x" inverse />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPull;
