import {defineStore} from "pinia";
import axios from "axios";
import router from "../router.js";
import {isBlank} from "../hook/tools.js";

const useItem = defineStore('item', {
    state: () => {
        return {
            cratesPreview: [],
            extrasPreview: [],
            itemPackage: {}
        }
    },
    actions: {
        async selectCratesList() {
            if (this.cratesPreview.length !== 0) return false
            const {data: {data: result}} = await axios.get('/homeward/api/item/category/crate')

            const itemPreviewMeta = {
                groupName: undefined,
                imageRegular: undefined,
                imageHover: undefined,
                itemsList: []
            }
            for (let i = 0; i < result.length; i++) {
                const v = result[i]
                if (itemPreviewMeta.groupName === undefined) {
                    itemPreviewMeta.groupName = v.groupName
                    itemPreviewMeta.imageRegular = v.imageRegular
                    itemPreviewMeta.imageHover = v.imageHover
                }
                if (itemPreviewMeta.groupName !== null) {
                    if (itemPreviewMeta.groupName === v.groupName) {
                        itemPreviewMeta.itemsList.push({
                            id: v.id,
                            amount: v.amount,
                            price: v.price,
                            discount: v.discount,
                            discountPercent: v.discountPercent
                        })
                    } else {
                        this.cratesPreview.push({
                            groupName: itemPreviewMeta.groupName,
                            imageRegular: itemPreviewMeta.imageRegular,
                            imageHover: itemPreviewMeta.imageHover,
                            itemsList: itemPreviewMeta.itemsList.reverse()
                        })
                        itemPreviewMeta.itemsList = []
                        itemPreviewMeta.groupName = v.groupName
                        itemPreviewMeta.imageRegular = v.imageRegular
                        itemPreviewMeta.imageHover = v.imageHover
                        itemPreviewMeta.itemsList.push({
                            id: v.id,
                            amount: v.amount,
                            price: v.price,
                            discount: v.discount,
                            discountPercent: v.discountPercent
                        })
                    }
                }
                if (i === result.length - 1) {
                    this.cratesPreview.push({
                        groupName: itemPreviewMeta.groupName,
                        imageRegular: itemPreviewMeta.imageRegular,
                        imageHover: itemPreviewMeta.imageHover,
                        itemsList: itemPreviewMeta.itemsList.reverse()
                    })
                }
            }
        },
        async selectExtrasList() {
            if (this.extrasPreview.length !== 0) return false
            const {data: {data: result}} = await axios.get('/homeward/api/item/category/extra')
            if (isBlank(result)) return false
            result.forEach(v => {
                this.extrasPreview.push(v)
            })
        },
        async toPackage(id) {
            router.push({
                name: 'package',
                params: {
                    id
                }
            })
        },
        async selectPackage(id) {
            if (isBlank(id)) return false;
            const {data: {data: result}} = await axios.get(`/homeward/api/item/package/${id}`)
            this.itemPackage = {...result}
        }
    }
})

export default useItem