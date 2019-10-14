import { getSubjectList } from '@/api/grade';
import { getExamTypeList } from '@/api/exam';

export default {
	namespace: 'exam',
	state: {
		examList: [],
		subjectList: []
	},
	effects: {
		*getExamTypeList({ payload }, { call, put }) {
			const result = yield call(getExamTypeList);
			console.log(result);
			yield put({
				type: '_getExamTypeList',
				payload: result.data.result
			});
		},

		*getSubjectList({ payload }, { put, call }) {
			const result = yield call(getSubjectList);
			yield put({ type: '_getSubjectList', payload: result.data.result });
		},

		*save({ payload }, { put, call }) {
			// console.log(payload, '.....');
			// let { proSize, proCount } = payload;
			// const result = yield call(getProductLimit, {
			// 	proSize,
			// 	proCount
			// });
			// yield put({ type: '_getProductList', payload: result.data.result });
		}
	},
	reducers: {
		_getExamTypeList(state, { payload }) {
			return { ...state, examList: [...payload] };
		},
		_getSubjectList(state, { payload }) {
			return { ...state, subjectList: [...payload] };
		}
		// _getProductList(state, { payload }) {
		// 	return {
		// 		...state,
		// 		productList: [...state.productList, ...payload]
		// 	};
		// }
	}
};
