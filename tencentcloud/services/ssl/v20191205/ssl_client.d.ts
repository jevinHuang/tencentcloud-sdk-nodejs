import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ApplyCertificateResponse, CompleteCertificateRequest, DeleteCertificateRequest, DescribeCertificateOperateLogsResponse, CommitCertificateInformationRequest, DownloadCertificateResponse, ReplaceCertificateResponse, DownloadCertificateRequest, CancelCertificateOrderRequest, ModifyCertificateProjectResponse, DescribeCertificateResponse, UploadCertificateRequest, UploadConfirmLetterRequest, DescribeCertificateDetailRequest, ApplyCertificateRequest, ReplaceCertificateRequest, UploadRevokeLetterResponse, CreateCertificateResponse, UploadRevokeLetterRequest, DeleteCertificateResponse, RevokeCertificateResponse, DescribeCertificateDetailResponse, CheckCertificateChainResponse, ModifyCertificateProjectRequest, ModifyCertificateAliasRequest, DescribeCertificateRequest, DescribeCertificateOperateLogsRequest, CancelCertificateOrderResponse, CreateCertificateRequest, DescribeCertificatesResponse, CommitCertificateInformationResponse, UploadConfirmLetterResponse, UploadCertificateResponse, CheckCertificateChainRequest, ModifyCertificateAliasResponse, SubmitCertificateInformationRequest, DescribeCertificatesRequest, CompleteCertificateResponse, SubmitCertificateInformationResponse, RevokeCertificateRequest } from "./ssl_models";
/**
 * ssl client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口（DescribeCertificates）用于获取证书列表。
     */
    DescribeCertificates(req: DescribeCertificatesRequest, cb?: (error: string, rep: DescribeCertificatesResponse) => void): Promise<DescribeCertificatesResponse>;
    /**
     * 本接口（UploadRevokeLetter）用于上传证书吊销确认函。
     */
    UploadRevokeLetter(req: UploadRevokeLetterRequest, cb?: (error: string, rep: UploadRevokeLetterResponse) => void): Promise<UploadRevokeLetterResponse>;
    /**
     * 本接口（UploadConfirmLetter）用于上传证书确认函。
     */
    UploadConfirmLetter(req: UploadConfirmLetterRequest, cb?: (error: string, rep: UploadConfirmLetterResponse) => void): Promise<UploadConfirmLetterResponse>;
    /**
     * 本接口（CreateCertificate）用于创建付费证书。
     */
    CreateCertificate(req: CreateCertificateRequest, cb?: (error: string, rep: CreateCertificateResponse) => void): Promise<CreateCertificateResponse>;
    /**
     * 批量修改证书所属项目。
     */
    ModifyCertificateProject(req: ModifyCertificateProjectRequest, cb?: (error: string, rep: ModifyCertificateProjectResponse) => void): Promise<ModifyCertificateProjectResponse>;
    /**
     * 取消证书订单。
     */
    CancelCertificateOrder(req: CancelCertificateOrderRequest, cb?: (error: string, rep: CancelCertificateOrderResponse) => void): Promise<CancelCertificateOrderResponse>;
    /**
     * 提交证书订单。
     */
    CommitCertificateInformation(req: CommitCertificateInformationRequest, cb?: (error: string, rep: CommitCertificateInformationResponse) => void): Promise<CommitCertificateInformationResponse>;
    /**
     * 本接口（DeleteCertificate）用于删除证书。
     */
    DeleteCertificate(req: DeleteCertificateRequest, cb?: (error: string, rep: DeleteCertificateResponse) => void): Promise<DeleteCertificateResponse>;
    /**
     * 本接口（CompleteCertificate）用于主动触发证书验证。仅非DNSPod和Wotrus品牌证书支持使用此接口。
     */
    CompleteCertificate(req: CompleteCertificateRequest, cb?: (error: string, rep: CompleteCertificateResponse) => void): Promise<CompleteCertificateResponse>;
    /**
     * 本接口（UploadCertificate）用于上传证书。
     */
    UploadCertificate(req: UploadCertificateRequest, cb?: (error: string, rep: UploadCertificateResponse) => void): Promise<UploadCertificateResponse>;
    /**
     * 用户传入证书id和备注来修改证书备注。
     */
    ModifyCertificateAlias(req: ModifyCertificateAliasRequest, cb?: (error: string, rep: ModifyCertificateAliasResponse) => void): Promise<ModifyCertificateAliasResponse>;
    /**
     * 本接口（DownloadCertificate）用于下载证书。
     */
    DownloadCertificate(req: DownloadCertificateRequest, cb?: (error: string, rep: DownloadCertificateResponse) => void): Promise<DownloadCertificateResponse>;
    /**
     * 本接口（ReplaceCertificate）用于重颁发证书。已申请的免费证书仅支持 RSA 算法、密钥对参数为2048的证书重颁发，并且目前仅支持1次重颁发。
     */
    ReplaceCertificate(req: ReplaceCertificateRequest, cb?: (error: string, rep: ReplaceCertificateResponse) => void): Promise<ReplaceCertificateResponse>;
    /**
     * 本接口（CheckCertificateChain）用于检查证书链是否完整。
     */
    CheckCertificateChain(req: CheckCertificateChainRequest, cb?: (error: string, rep: CheckCertificateChainResponse) => void): Promise<CheckCertificateChainResponse>;
    /**
     * 本接口（ApplyCertificate）用于免费证书申请。
     */
    ApplyCertificate(req: ApplyCertificateRequest, cb?: (error: string, rep: ApplyCertificateResponse) => void): Promise<ApplyCertificateResponse>;
    /**
     * 本接口（RevokeCertificate）用于吊销证书。
     */
    RevokeCertificate(req: RevokeCertificateRequest, cb?: (error: string, rep: RevokeCertificateResponse) => void): Promise<RevokeCertificateResponse>;
    /**
     * 获取用户账号下有关证书的操作日志。
     */
    DescribeCertificateOperateLogs(req: DescribeCertificateOperateLogsRequest, cb?: (error: string, rep: DescribeCertificateOperateLogsResponse) => void): Promise<DescribeCertificateOperateLogsResponse>;
    /**
     * 提交证书资料。输入参数信息可以分多次提交，但提交的证书资料应最低限度保持完整。
     */
    SubmitCertificateInformation(req: SubmitCertificateInformationRequest, cb?: (error: string, rep: SubmitCertificateInformationResponse) => void): Promise<SubmitCertificateInformationResponse>;
    /**
     * 获取证书详情。
     */
    DescribeCertificateDetail(req: DescribeCertificateDetailRequest, cb?: (error: string, rep: DescribeCertificateDetailResponse) => void): Promise<DescribeCertificateDetailResponse>;
    /**
     * 本接口（DescribeCertificate）用于获取证书信息。
     */
    DescribeCertificate(req: DescribeCertificateRequest, cb?: (error: string, rep: DescribeCertificateResponse) => void): Promise<DescribeCertificateResponse>;
}
