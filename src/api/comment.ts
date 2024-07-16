import axios from "@/request/axios";
import {Page} from "@/api/base";

const BASE_URL = '/comment';

export interface CommentApi {
    id: string | number;
    parentId: string | number | null;
    uid: string | number;
    address?: string;
    content: string;
    likes?: number;
    contentImg?: string;
    createTime: string;
    user: CommentUserApi;
    reply?: ReplyApi | null;
}
export interface ReplyApi {
    total: number;
    list: CommentApi[];
}
export interface CommentUserApi {
    username: string;
    avatar: string;
    level?: number;
    homeLink?: string;
}
export interface UserApi {
    id: string | number;
    username: string;
    avatar: string;
    likeIds?: string[] | number[];
}
export interface ConfigApi {
    user: UserApi;
    emoji: EmojiApi;
    comments: CommentApi[];
    replyShowSize?: number;
    showForm?: boolean;
    showContent?: boolean;
    showLevel?: boolean;
    showLikes?: boolean;
    showAddress?: boolean;
    showHomeLink?: boolean;
    showReply?: boolean;
    placeholder?: string;
    aTarget?: '_blank' | '_parent' | '_self' | '_top';
    mentionConfig?: {
        isLoading?: boolean;
        show?: boolean;
        userIdKey?: string;
        userNameKey?: string;
        userAvatarKey?: string;
        mentionColor?: string;
        userArr?: any[];
        showAvatar?: boolean;
    };
}
export interface SubmitParamApi {
    content: string;
    parentId: string | null;
    files?: any[];
    reply?: CommentApi;
    finish: (comment?: CommentApi) => void;
    mentionList?: any[];
}
export interface ReplyPageParamApi {
    parentId: string;
    pageNum: number;
    pageSize: number;
    finish: (reply: ReplyApi) => void;
}

export function addComment(comment: CommentApi)  {
    return axios.post(`${BASE_URL}/add`, comment);
}

export function commentList(page: Page, articleId: string | number) {
    return axios.get(`${BASE_URL}/page`, {
        params: {
            articleId: articleId,
            pageSize: page.pageSize,
            currentPage: page.currentPage,
        }
    });
}