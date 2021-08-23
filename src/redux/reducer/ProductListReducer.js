import {
  PRODUCTLIST_REQUEST,
  PRODUCTLIST_SUCCESS,
  FILTERCATEGORY,
  FILTERCOLOR,
  FILTERPRICE,
  FILTERRATING,
  DASHBOARDFILTER,
  CLEARALLFILTER,
} from '../constant/type';

const initialState = {
  isLoading: false,
  productListData: '',
  displayData: '',
  cloneData: '',
  topProducts:'',
  filterData:'',
  clearFilterData:''
};


/**
 *
 * @param {*} param0
 * @description This is reducer which has some basic constraints on how that write logic function should work.
 * @author Ravi Ranjan
 * @returns the new state or update state.
 */



const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTLIST_REQUEST: {
      return {
        isLoading: true,
      };
    }
    case PRODUCTLIST_SUCCESS: {
      return {
        isLoading: false,
        productListData: action.payload,
        filterData: action.payload,
        displayData: action.payload,
        clearFilterData: action.payload,
        cloneData:action.payload
      };
    }

    case FILTERCATEGORY: {
      return {
        ...state,
        displayData: state.productListData.filter(item => {
          return item.category.name === action.payload;
        }),
        cloneData: state.productListData.filter(item => {
          return item.category.name === action.payload;
        }),
      };
    }

    case FILTERCOLOR: {
      return {
        ...state,
        displayData: state.cloneData?.filter(item => {
          return item.color.name === action.payload;
        }),
      };
    }

    case FILTERPRICE: {
      return {
        ...state,
        displayData: state.displayData?.sort(function (a, b) {
          if (action.payload === 'high') {
            return b.price - a.price;
          } else if (action.payload === 'low') {
            return a.price - b.price;
          }
        }),
      };
    }

    case FILTERRATING: {
      return {
        ...state,
        displayData: state.displayData?.sort(function (a, b) {
          if (action.payload === 'high') {
            return b.avgRating - a.avgRating;
          } else if (action.payload === 'low') {
            return a.avgRating - b.avgRating;
          }
        }),
      };
    }

    case DASHBOARDFILTER: {
      return {
        ...state,
        topProducts: state.filterData?.filter(item => {
          return item.avgRating >= 4;
        })
      };
    }

    case CLEARALLFILTER: {
      return {
        ...state,
        // displayData: state.clearFilterData,
        // cloneData: state.clearFilterData
      };
    }

    default:
      return state;
  }
};

export default productListReducer;
