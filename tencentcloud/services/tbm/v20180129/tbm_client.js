"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * tbm client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tbm.tencentcloudapi.com", "2018-01-29", clientConfig);
    }
    /**
     * 通过分析洞察参与过品牌媒体互动的用户，比如公开发表品牌的新闻评论、在公开社交渠道发表过对品牌的评价观点等用户，返回用户的画像属性分布，例如性别、年龄、地域、喜爱的明星、喜爱的影视。
     */
    async DescribeUserPortrait(req, cb) {
        return this.request("DescribeUserPortrait", req, cb);
    }
    /**
     * 通过分析用户在评价品牌时用词的正负面情绪评分，返回品牌热门好评观点列表。
     */
    async DescribeBrandPosComments(req, cb) {
        return this.request("DescribeBrandPosComments", req, cb);
    }
    /**
     * 根据客户定制的行业关键词，监测关键词出现在媒体网站（新闻媒体、网络门户、政府网站、微信公众号、天天快报等）发布资讯标题和正文中的报道数，以及文章列表、来源渠道、作者、发布时间等。
     */
    async DescribeIndustryNews(req, cb) {
        return this.request("DescribeIndustryNews", req, cb);
    }
    /**
     * 监测品牌关键词出现在媒体网站（新闻媒体、网络门户、政府网站、微信公众号、天天快报等）发布资讯标题和正文中的报道数。按天输出结果。
     */
    async DescribeBrandMediaReport(req, cb) {
        return this.request("DescribeBrandMediaReport", req, cb);
    }
    /**
     * 通过分析用户在评价品牌时用词的正负面情绪评分，返回品牌热门差评观点列表。
     */
    async DescribeBrandNegComments(req, cb) {
        return this.request("DescribeBrandNegComments", req, cb);
    }
    /**
     * 监测品牌关键词出现在微博、QQ兴趣部落、论坛、博客等个人公开贡献资讯中的条数。按天输出数据结果。
     */
    async DescribeBrandSocialReport(req, cb) {
        return this.request("DescribeBrandSocialReport", req, cb);
    }
    /**
     * 检测品牌关键词出现在微博、QQ兴趣部落、论坛、博客等个人公开贡献资讯中的内容，每天聚合近30天热度最高的观点列表。
     */
    async DescribeBrandSocialOpinion(req, cb) {
        return this.request("DescribeBrandSocialOpinion", req, cb);
    }
    /**
     * 通过分析用户在评价品牌时用词的正负面情绪评分，返回品牌好评与差评评价条数，按天输出结果。
     */
    async DescribeBrandCommentCount(req, cb) {
        return this.request("DescribeBrandCommentCount", req, cb);
    }
    /**
     * 监测品牌关键词命中文章标题或全文的文章篇数，按天输出数据。
     */
    async DescribeBrandExposure(req, cb) {
        return this.request("DescribeBrandExposure", req, cb);
    }
}
exports.Client = Client;
