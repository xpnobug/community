import axios from "@/request/axios";
import type * as ChannelsResponse from "./type";
import {Page} from "@/api/base";

const BASE_URL = '/channel'

export function channelsList(page: Page) {
    return axios.get(`${BASE_URL}/pageList`, {
        params: {
            pageSize: page.pageSize,
            currentPage: page.currentPage,
        }
    })
}

export function channelList(page: Page, isOfficial: number) {
    return axios.get(`${BASE_URL}/channelList`, {
        params: {
            pageSize: page.pageSize,
            currentPage: page.currentPage,
            isOfficial: isOfficial
        }
    })
}

export function addChannel(channel: ChannelsResponse) {
    return axios.post(`${BASE_URL}/add`, channel);
}
