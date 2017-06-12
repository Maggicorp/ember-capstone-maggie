// import ApplicationAdapter from './application';
//
// export default ApplicationAdapter.extend({
//   apicall() {
//     let api = this.get('host')
//     console.log('api', api)
//     console.log('record', record)
//     let serialized = this.serialize(record, {includeId: true})
//     console.log('serialized', serialized)
//     let listId = serialized.list_id
//     let url = `${api}/lists/${listId}/items`
//     let data = {item: serialized}
//     return this.ajax(url, 'POST', {data})
//   }
// });
