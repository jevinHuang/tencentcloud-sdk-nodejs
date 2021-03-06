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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  AudioStreamInfo,
  ModifyMaterialResponse,
  DeleteProjectRequest,
  ExportVideoByVideoSegmentationDataResponse,
  ImportMaterialResponse,
  StreamConnectProjectInput,
  ExportVideoByVideoSegmentationDataRequest,
  MediaTransitionItem,
  DescribeTeamsResponse,
  DescribeTaskDetailResponse,
  ExportVideoEditProjectRequest,
  ClassInfo,
  ModifyProjectResponse,
  AudioTrackItem,
  IntegerRange,
  SearchMaterialRequest,
  DeleteTeamResponse,
  StreamConnectOutput,
  VideoSegmentationProjectInput,
  RevokeResourceAuthorizationResponse,
  DescribeTasksResponse,
  ProjectInfo,
  VideoTrackItem,
  DeleteTeamRequest,
  DescribeTeamsRequest,
  LinkMaterial,
  SwitcherProjectInput,
  FlattenListMediaRequest,
  RtmpPushInputInfo,
  AudioMaterial,
  AddMemberInfo,
  Entity,
  TeamInfo,
  ExportVideoByEditorTrackDataRequest,
  MaterialTagInfo,
  VideoEditProjectOutput,
  CreateProjectRequest,
  ModifyMaterialRequest,
  Authorizer,
  DescribePlatformsResponse,
  DescribeTasksRequest,
  MediaTrackItem,
  TimeRange,
  DescribeLoginStatusRequest,
  DeleteLoginStatusResponse,
  WeiboPublishInfo,
  Resource,
  CreateLinkResponse,
  ExportVideoByTemplateResponse,
  StreamInputInfo,
  ListMediaResponse,
  SearchMaterialResponse,
  EmptyTrackItem,
  PlatformInfo,
  DescribeJoinTeamsRequest,
  DeleteMaterialRequest,
  CreateProjectResponse,
  VideoEditProjectInput,
  DeleteProjectResponse,
  DeleteClassRequest,
  CreateLinkRequest,
  CreateClassRequest,
  DescribeMaterialsResponse,
  GrantResourceAuthorizationResponse,
  SwitcherPgmOutputConfig,
  CMEExportInfo,
  MoveResourceRequest,
  LivePullInputInfo,
  ImportMediaToProjectRequest,
  VODExportInfo,
  SortBy,
  PenguinMediaPlatformPublishInfo,
  ImageMaterial,
  DescribeClassRequest,
  DescribeSharedSpaceResponse,
  MediaMetaData,
  MoveResourceResponse,
  MoveClassRequest,
  DeleteTeamMembersResponse,
  MoveClassResponse,
  ImportMediaToProjectResponse,
  ModifyTeamMemberResponse,
  DescribeTeamMembersResponse,
  AddTeamMemberResponse,
  CreateTeamResponse,
  ModifyTeamRequest,
  ModifyTeamMemberRequest,
  CreateTeamRequest,
  MaterialBasicInfo,
  ResourceInfo,
  JoinTeamInfo,
  DescribeResourceAuthorizationRequest,
  CreateClassResponse,
  SlotInfo,
  MediaReplacementInfo,
  RecordReplayProjectInput,
  VideoStreamInfo,
  AddTeamMemberRequest,
  ExportVideoEditProjectResponse,
  ThirdPartyPublishInfo,
  ListMediaRequest,
  VodPullInputInfo,
  ModifyTeamResponse,
  DeleteLoginStatusRequest,
  GenerateVideoSegmentationSchemeByAiRequest,
  DeleteTeamMembersRequest,
  ExportVideoByTemplateRequest,
  DescribePlatformsRequest,
  OtherMaterial,
  SearchScope,
  VideoMaterial,
  DescribeResourceAuthorizationResponse,
  FlattenListMediaResponse,
  DescribeProjectsRequest,
  DescribeLoginStatusResponse,
  TeamMemberInfo,
  DescribeJoinTeamsResponse,
  DescribeTeamMembersRequest,
  MaterialStatus,
  DescribeProjectsResponse,
  AuthorizationInfo,
  VideoEditTemplateMaterial,
  SlotReplacementInfo,
  DeleteMaterialResponse,
  RevokeResourceAuthorizationRequest,
  DescribeTaskDetailRequest,
  MediaTrack,
  ModifyProjectRequest,
  MaterialInfo,
  LoginStatusInfo,
  DescribeClassResponse,
  GenerateVideoSegmentationSchemeByAiResponse,
  PresetTagInfo,
  DescribeSharedSpaceRequest,
  KuaishouPublishInfo,
  TaskBaseInfo,
  DeleteClassResponse,
  LiveStreamClipProjectInput,
  ExternalMediaInfo,
  LinkMaterialInfo,
  ExportVideoByEditorTrackDataResponse,
  GrantResourceAuthorizationRequest,
  MediaImageSpriteInfo,
  ImportMaterialRequest,
  DescribeMaterialsRequest,
} from "./cme_models"

/**
 * cme client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cme.tencentcloudapi.com", "2019-10-29", clientConfig)
  }

  /**
   * 根据媒体 Id 批量获取媒体详情。
   */
  async DescribeMaterials(
    req: DescribeMaterialsRequest,
    cb?: (error: string, rep: DescribeMaterialsResponse) => void
  ): Promise<DescribeMaterialsResponse> {
    return this.request("DescribeMaterials", req, cb)
  }

  /**
   * 获取指定团队的信息，拉取团队信息列表。
   */
  async DescribeTeams(
    req: DescribeTeamsRequest,
    cb?: (error: string, rep: DescribeTeamsResponse) => void
  ): Promise<DescribeTeamsResponse> {
    return this.request("DescribeTeams", req, cb)
  }

  /**
   * 导出视频编辑项目，支持指定输出的模板。
   */
  async ExportVideoEditProject(
    req: ExportVideoEditProjectRequest,
    cb?: (error: string, rep: ExportVideoEditProjectResponse) => void
  ): Promise<ExportVideoEditProjectResponse> {
    return this.request("ExportVideoEditProject", req, cb)
  }

  /**
   * 获取共享空间。当个人或团队A对个人或团队B授权某资源以后，个人或团队B的共享空间就会增加个人或团队A。
   */
  async DescribeSharedSpace(
    req: DescribeSharedSpaceRequest,
    cb?: (error: string, rep: DescribeSharedSpaceResponse) => void
  ): Promise<DescribeSharedSpaceResponse> {
    return this.request("DescribeSharedSpace", req, cb)
  }

  /**
     * <li>发起视频智能拆条任务，支持智能生成和平精英集锦、王者荣耀集锦、足球集锦、篮球集锦 、人物集锦、新闻拆条等任务。</li>
<li>和平精英集锦和王者荣耀集锦根据击杀场景进行拆条，足球集锦和篮球集锦根据进球场景进行拆条，人物集锦根据人物人脸特征进行拆条，新闻拆条根据导播进行拆条。</li>
<li>【本接口内测中，暂不建议使用】</li>
     */
  async GenerateVideoSegmentationSchemeByAi(
    req: GenerateVideoSegmentationSchemeByAiRequest,
    cb?: (error: string, rep: GenerateVideoSegmentationSchemeByAiResponse) => void
  ): Promise<GenerateVideoSegmentationSchemeByAiResponse> {
    return this.request("GenerateVideoSegmentationSchemeByAi", req, cb)
  }

  /**
   * 使用视频智能拆条数据导出视频，将指定的视频拆条片段导出为一个视频。
   */
  async ExportVideoByVideoSegmentationData(
    req: ExportVideoByVideoSegmentationDataRequest,
    cb?: (error: string, rep: ExportVideoByVideoSegmentationDataResponse) => void
  ): Promise<ExportVideoByVideoSegmentationDataResponse> {
    return this.request("ExportVideoByVideoSegmentationData", req, cb)
  }

  /**
   * 资源归属者对目标个人或团队授予目标资源的相应权限。
   */
  async GrantResourceAuthorization(
    req: GrantResourceAuthorizationRequest,
    cb?: (error: string, rep: GrantResourceAuthorizationResponse) => void
  ): Promise<GrantResourceAuthorizationResponse> {
    return this.request("GrantResourceAuthorization", req, cb)
  }

  /**
   * 根据检索条件搜索媒体，返回媒体的基本信息。
   */
  async SearchMaterial(
    req: SearchMaterialRequest,
    cb?: (error: string, rep: SearchMaterialResponse) => void
  ): Promise<SearchMaterialResponse> {
    return this.request("SearchMaterial", req, cb)
  }

  /**
   *  资源所属实体对目标实体回收目标资源的相应权限，若原本没有相应权限则不产生变更。
   */
  async RevokeResourceAuthorization(
    req: RevokeResourceAuthorizationRequest,
    cb?: (error: string, rep: RevokeResourceAuthorizationResponse) => void
  ): Promise<RevokeResourceAuthorizationResponse> {
    return this.request("RevokeResourceAuthorization", req, cb)
  }

  /**
   * 获取指定的团队成员所加入的团队列表。
   */
  async DescribeJoinTeams(
    req: DescribeJoinTeamsRequest,
    cb?: (error: string, rep: DescribeJoinTeamsResponse) => void
  ): Promise<DescribeJoinTeamsResponse> {
    return this.request("DescribeJoinTeams", req, cb)
  }

  /**
   * 查询指定资源的授权列表。
   */
  async DescribeResourceAuthorization(
    req: DescribeResourceAuthorizationRequest,
    cb?: (error: string, rep: DescribeResourceAuthorizationResponse) => void
  ): Promise<DescribeResourceAuthorizationResponse> {
    return this.request("DescribeResourceAuthorization", req, cb)
  }

  /**
   * 将云点播媒资文件导入到云剪媒体资源库。
   */
  async ImportMaterial(
    req: ImportMaterialRequest,
    cb?: (error: string, rep: ImportMaterialResponse) => void
  ): Promise<ImportMaterialResponse> {
    return this.request("ImportMaterial", req, cb)
  }

  /**
   * 使用视频合成协议导出视频，支持导出到CME云媒资和VOD云媒资。
   */
  async ExportVideoByEditorTrackData(
    req: ExportVideoByEditorTrackDataRequest,
    cb?: (error: string, rep: ExportVideoByEditorTrackDataResponse) => void
  ): Promise<ExportVideoByEditorTrackDataResponse> {
    return this.request("ExportVideoByEditorTrackData", req, cb)
  }

  /**
     * <li>支持获取所创建的所有平台列表信息；</li>
<li>支持获取指定的平台列表信息。</li>


     */
  async DescribePlatforms(
    req: DescribePlatformsRequest,
    cb?: (error: string, rep: DescribePlatformsResponse) => void
  ): Promise<DescribePlatformsResponse> {
    return this.request("DescribePlatforms", req, cb)
  }

  /**
     * 获取任务详情信息，包含下面几个部分：
<li>任务基础信息：包括任务状态、错误信息、创建时间等；</li>
<li>导出项目输出信息：包括输出的素材 Id 等。</li>
     */
  async DescribeTaskDetail(
    req: DescribeTaskDetailRequest,
    cb?: (error: string, rep: DescribeTaskDetailResponse) => void
  ): Promise<DescribeTaskDetailResponse> {
    return this.request("DescribeTaskDetail", req, cb)
  }

  /**
   *  创建媒体链接或分类路径链接，将源资源信息链接到目标。
   */
  async CreateLink(
    req: CreateLinkRequest,
    cb?: (error: string, rep: CreateLinkResponse) => void
  ): Promise<CreateLinkResponse> {
    return this.request("CreateLink", req, cb)
  }

  /**
     * 修改团队信息，目前支持修改的操作有：
<li>修改团队名称。</li>
     */
  async ModifyTeam(
    req: ModifyTeamRequest,
    cb?: (error: string, rep: ModifyTeamResponse) => void
  ): Promise<ModifyTeamResponse> {
    return this.request("ModifyTeam", req, cb)
  }

  /**
   * 根据媒体 Id 删除媒体。
   */
  async DeleteMaterial(
    req: DeleteMaterialRequest,
    cb?: (error: string, rep: DeleteMaterialResponse) => void
  ): Promise<DeleteMaterialResponse> {
    return this.request("DeleteMaterial", req, cb)
  }

  /**
   * 修改媒体信息，支持修改媒体名称、分类路径、标签等信息。
   */
  async ModifyMaterial(
    req: ModifyMaterialRequest,
    cb?: (error: string, rep: ModifyMaterialResponse) => void
  ): Promise<ModifyMaterialResponse> {
    return this.request("ModifyMaterial", req, cb)
  }

  /**
     * 删除一个团队。
<li>要删除的团队必须没有归属的素材；</li>
<li>要删除的团队必须没有归属的分类。</li>
     */
  async DeleteTeam(
    req: DeleteTeamRequest,
    cb?: (error: string, rep: DeleteTeamResponse) => void
  ): Promise<DeleteTeamResponse> {
    return this.request("DeleteTeam", req, cb)
  }

  /**
   * 向一个团队中团队成员，并且指定成员的角色。
   */
  async AddTeamMember(
    req: AddTeamMemberRequest,
    cb?: (error: string, rep: AddTeamMemberResponse) => void
  ): Promise<AddTeamMemberResponse> {
    return this.request("AddTeamMember", req, cb)
  }

  /**
     * 移动某一个分类到另外一个分类下，也可用于分类重命名。
如果 SourceClassPath = /素材/视频/NBA，DestinationClassPath = /素材/视频/篮球
<li>当 DestinationClassPath 不存在时候，操作结果为重命名 ClassPath；</li>
<li>当 DestinationClassPath 存在时候，操作结果为产生新目录 /素材/视频/篮球/NBA</li>
     */
  async MoveClass(
    req: MoveClassRequest,
    cb?: (error: string, rep: MoveClassResponse) => void
  ): Promise<MoveClassResponse> {
    return this.request("MoveClass", req, cb)
  }

  /**
   * 修改团队成员信息，包括成员备注、角色等。
   */
  async ModifyTeamMember(
    req: ModifyTeamMemberRequest,
    cb?: (error: string, rep: ModifyTeamMemberResponse) => void
  ): Promise<ModifyTeamMemberResponse> {
    return this.request("ModifyTeamMember", req, cb)
  }

  /**
   * 将团队成员从团队中删除，默认只有 Owner 及管理员才有此权限。
   */
  async DeleteTeamMembers(
    req: DeleteTeamMembersRequest,
    cb?: (error: string, rep: DeleteTeamMembersResponse) => void
  ): Promise<DeleteTeamMembersResponse> {
    return this.request("DeleteTeamMembers", req, cb)
  }

  /**
   * 删除用户登录态，使用户登出云剪平台。
   */
  async DeleteLoginStatus(
    req: DeleteLoginStatusRequest,
    cb?: (error: string, rep: DeleteLoginStatusResponse) => void
  ): Promise<DeleteLoginStatusResponse> {
    return this.request("DeleteLoginStatus", req, cb)
  }

  /**
   * 支持根据多种条件过滤出项目列表。
   */
  async DescribeProjects(
    req: DescribeProjectsRequest,
    cb?: (error: string, rep: DescribeProjectsResponse) => void
  ): Promise<DescribeProjectsResponse> {
    return this.request("DescribeProjects", req, cb)
  }

  /**
   * 查询指定用户的登录态。
   */
  async DescribeLoginStatus(
    req: DescribeLoginStatusRequest,
    cb?: (error: string, rep: DescribeLoginStatusResponse) => void
  ): Promise<DescribeLoginStatusResponse> {
    return this.request("DescribeLoginStatus", req, cb)
  }

  /**
   * 获取任务列表，支持条件筛选，返回对应的任务基础信息列表。
   */
  async DescribeTasks(
    req: DescribeTasksRequest,
    cb?: (error: string, rep: DescribeTasksResponse) => void
  ): Promise<DescribeTasksResponse> {
    return this.request("DescribeTasks", req, cb)
  }

  /**
   * 获取指定归属者下所有的分类信息。
   */
  async DescribeClass(
    req: DescribeClassRequest,
    cb?: (error: string, rep: DescribeClassResponse) => void
  ): Promise<DescribeClassResponse> {
    return this.request("DescribeClass", req, cb)
  }

  /**
   * 创建一个团队。
   */
  async CreateTeam(
    req: CreateTeamRequest,
    cb?: (error: string, rep: CreateTeamResponse) => void
  ): Promise<CreateTeamResponse> {
    return this.request("CreateTeam", req, cb)
  }

  /**
   * 修改云剪编辑项目的信息。
   */
  async ModifyProject(
    req: ModifyProjectRequest,
    cb?: (error: string, rep: ModifyProjectResponse) => void
  ): Promise<ModifyProjectResponse> {
    return this.request("ModifyProject", req, cb)
  }

  /**
     * 新增分类，用于管理素材。
<li>分类层数不能超过10；</li>
<li>子分类数不能超过10。</li>
     */
  async CreateClass(
    req: CreateClassRequest,
    cb?: (error: string, rep: CreateClassResponse) => void
  ): Promise<CreateClassResponse> {
    return this.request("CreateClass", req, cb)
  }

  /**
   * 将云点播中的媒资或者用户自有媒资文件添加到媒体库中，跟项目关联，供后续视频编辑使用。目前仅普通编辑项目和智能视频拆条项目有效。
   */
  async ImportMediaToProject(
    req: ImportMediaToProjectRequest,
    cb?: (error: string, rep: ImportMediaToProjectResponse) => void
  ): Promise<ImportMediaToProjectResponse> {
    return this.request("ImportMediaToProject", req, cb)
  }

  /**
   *  浏览当前分类路径下的资源，包括媒体文件和子分类，返回媒资基础信息和分类信息。
   */
  async ListMedia(
    req: ListMediaRequest,
    cb?: (error: string, rep: ListMediaResponse) => void
  ): Promise<ListMediaResponse> {
    return this.request("ListMedia", req, cb)
  }

  /**
     * 创建云剪的编辑项目，支持创建视频剪辑、直播剪辑、导播台、视频拆条、录制回放以及云转推项目。

     */
  async CreateProject(
    req: CreateProjectRequest,
    cb?: (error: string, rep: CreateProjectResponse) => void
  ): Promise<CreateProjectResponse> {
    return this.request("CreateProject", req, cb)
  }

  /**
   * 使用视频编辑模板直接导出视频。
   */
  async ExportVideoByTemplate(
    req: ExportVideoByTemplateRequest,
    cb?: (error: string, rep: ExportVideoByTemplateResponse) => void
  ): Promise<ExportVideoByTemplateResponse> {
    return this.request("ExportVideoByTemplate", req, cb)
  }

  /**
     * 移动资源，支持跨个人或团队移动媒体以及分类。如果填写了Operator，则需要校验用户对媒体和分类资源的访问以及写权限。
<li>当原始资源为媒体时，该接口效果为将该媒体移动到目标分类下面；</li>
<li>当原始资源为分类时，该接口效果为将原始分类移动到目标分类或者是重命名。</li>
 如果 SourceResource.Resource.Id = /素材/视频/NBA，DestinationResource.Resource.Id= /素材/视频/篮球 
<li>当 DestinationResource.Resource.Id 不存在时候且原始资源与目标资源归属相同，操作结果为重命名原始分类；</li>
<li>当 DestinationResource.Resource.Id 存在时候，操作结果为产生新目录 /素材/视频/篮球/NBA</li>

     */
  async MoveResource(
    req: MoveResourceRequest,
    cb?: (error: string, rep: MoveResourceResponse) => void
  ): Promise<MoveResourceResponse> {
    return this.request("MoveResource", req, cb)
  }

  /**
     * 删除分类信息，删除时检验下述限制：
<li>分类路径必须存在；</li>
<li>分类下没有绑定素材。</li>
     */
  async DeleteClass(
    req: DeleteClassRequest,
    cb?: (error: string, rep: DeleteClassResponse) => void
  ): Promise<DeleteClassResponse> {
    return this.request("DeleteClass", req, cb)
  }

  /**
   * 删除云剪编辑项目。
   */
  async DeleteProject(
    req: DeleteProjectRequest,
    cb?: (error: string, rep: DeleteProjectResponse) => void
  ): Promise<DeleteProjectResponse> {
    return this.request("DeleteProject", req, cb)
  }

  /**
   * 平铺分类路径下及其子分类下的所有媒体基础信息。
   */
  async FlattenListMedia(
    req: FlattenListMediaRequest,
    cb?: (error: string, rep: FlattenListMediaResponse) => void
  ): Promise<FlattenListMediaResponse> {
    return this.request("FlattenListMedia", req, cb)
  }

  /**
   * 获取指定成员 ID 的信息，同时支持拉取所有团队成员信息。
   */
  async DescribeTeamMembers(
    req: DescribeTeamMembersRequest,
    cb?: (error: string, rep: DescribeTeamMembersResponse) => void
  ): Promise<DescribeTeamMembersResponse> {
    return this.request("DescribeTeamMembers", req, cb)
  }
}
