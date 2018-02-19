import { observable, action, runInAction } from 'mobx'
import StorageService from '../services/StorageService'

class SearchStore {

    @observable data = {}

    @action loadForm(data) {
        this.data = {
            ...this.data,
            data
        }
    }

    @action loadStoredData() {
        //load form data from local storage
        const data = StorageService.getSearchData() || {}
        //dispatch an action        
        this.loadForm(data)
    }

    @action clearForm() {
        StorageService.removeSearchData()
        this.data = {}
    }

}

export default new SearchStore()

export { SearchStore }
