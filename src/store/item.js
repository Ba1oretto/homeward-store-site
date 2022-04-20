import {defineStore} from "pinia";
import axios from "axios";

const useItem = defineStore('item', {
    state: () => {
        return {
            itemPreview: []
        }
    },
    actions: {
        async selectCratesList() {
            const {data: {data: result}} = await axios.get('/homeward/api/item/crate')

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
                        this.itemPreview.push({
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
                    this.itemPreview.push({
                        groupName: itemPreviewMeta.groupName,
                        imageRegular: itemPreviewMeta.imageRegular,
                        imageHover: itemPreviewMeta.imageHover,
                        itemsList: itemPreviewMeta.itemsList.reverse()
                    })
                }
            }
        }
    }
})

export default useItem