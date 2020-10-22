import store from "Store";
import * as ReselectTools from "reselect-tools";
import * as selectors from "Store/selectors";

ReselectTools.registerSelectors(selectors);
ReselectTools.getStateWith(() => store.getState());
