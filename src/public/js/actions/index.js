const ADD_PRODUCT = 'ADD_PRODUCT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'
const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
const CLONE_PRODUCT = 'CLONE_PRODUCT'

const SHOW_ADD_FORM = 'SHOW_ADD_FORM'
const HIDE_ADD_FORM = 'HIDE_ADD_FORM'

const SHOW_EDIT_FORM = 'SHOW_EDIT_FORM'
const HIDE_EDIT_FORM = 'HIDE_EDIT_FORM'

const HIDE_FORMS = 'HIDE_FORMS'

const SEARCH = 'SEARCH'

const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product
})

const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload: id
})

const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  payload: product
})

const cloneProduct = (id) => ({
  type: CLONE_PRODUCT,
  payload: id
})

const showAddForm = () => ({
  type: SHOW_ADD_FORM,
  payload: undefined
})

const hideAddForm = () => ({
  type: HIDE_ADD_FORM,
  payload: undefined
})

const showEditForm = (productId) => ({
  type: SHOW_EDIT_FORM,
  payload: productId
})

const hideEditForm = () => ({
  type: HIDE_EDIT_FORM,
  payload: undefined
})

const hideForms = () => ({
  type: HIDE_FORMS,
  payload: undefined
})

const search = (query) => ({
  type: SEARCH,
  payload: query
})

export default {
  ADD_PRODUCT,
  addProduct,
  DELETE_PRODUCT,
  deleteProduct,
  UPDATE_PRODUCT,
  updateProduct,
  CLONE_PRODUCT,
  cloneProduct,
  SHOW_ADD_FORM,
  showAddForm,
  HIDE_ADD_FORM,
  hideAddForm,
  SHOW_EDIT_FORM,
  showEditForm,
  HIDE_EDIT_FORM,
  hideEditForm,
  HIDE_FORMS,
  hideForms,
  SEARCH,
  search
}
