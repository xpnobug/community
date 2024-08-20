import axios from "@/request/axios";
import { ref, onMounted, watch } from 'vue';
import {Page} from "@/api/base";

const BASE_URL = '/dict';
// 定义一个接口来描述字典项
interface DictionaryItem {
    itemCode: string;
    itemName: string;
    // 其他字段
}

export function dictList(dictCode: string) {
    return axios.get(`${BASE_URL}/dictItem`, {
        params: { dictCode: dictCode }
    });
}

// 自定义组合式函数
export function useDictionaryItem(itemCode: string) {
    const dictionaryItem = ref<DictionaryItem | null>(null);

    const fetchDictionaryItem = async (code: string) => {
        const response = await axios.get(`${BASE_URL}/getDictByItemCode`, {
            params: { itemCode: code }
        });
        dictionaryItem.value = response.data.data;
    };
    onMounted(() => {
        fetchDictionaryItem(itemCode);
    });

    watch(() => itemCode, (newCode) => {
        fetchDictionaryItem(newCode);
    });

    return dictionaryItem;
}
