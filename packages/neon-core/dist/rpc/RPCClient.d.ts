import { AxiosRequestConfig } from "axios";
import { BaseTransaction } from "../tx/transaction/BaseTransaction";
import { RPCVMResponse } from "./parse";
import Query from "./Query";
export interface Validator {
    publickey: string;
    votes: string;
    active: boolean;
}
/**
 * RPC Client model to query a NEO node. Contains built-in methods to query using RPC calls.
 */
export declare class RPCClient {
    net: string;
    history: Query[];
    lastSeenHeight: number;
    version: string;
    private _latencies;
    /**
     * @param net 'MainNet' or 'TestNet' will query the default RPC address found in consts. You may provide a custom URL.
     * @param version Version of NEO node. Used to check if RPC methods have been implemented. it will default to DEFAULT_RPC found in CONST
     */
    constructor(net: string, version?: string);
    readonly [Symbol.toStringTag]: string;
    latency: number;
    /**
     * Measures the latency using getBlockCount call. Returns the current latency. For average, call this.latency
     */
    ping(): Promise<number>;
    /**
     * Takes an Query object and executes it. Adds the Query object to history.
     */
    execute(query: Query, config?: AxiosRequestConfig): Promise<any>;
    /**
     * Creates a query with the given req and immediately executes it.
     */
    query(req: object, config?: AxiosRequestConfig): Promise<any>;
    /**
     * Gets the state of an account given an address.
     */
    getAccountState(addr: string): Promise<any>;
    /**
     * Gets the state of an asset given an id.
     */
    getAssetState(assetId: string): Promise<any>;
    /**
     * Gets the block at a given height or hash.
     */
    getBlock(indexOrHash: string | number, verbose?: number): Promise<object | string>;
    /**
     * Gets the block hash at a given height.
     */
    getBlockHash(index: number): Promise<string>;
    /**
     * Get the latest block hash.
     */
    getBestBlockHash(): Promise<string>;
    /**
     * Get the current block height.
     */
    getBlockCount(): Promise<number>;
    /**
     * Get the system fees of a block.
     * @param {number} index
     * @return {Promise<string>} - System fees as a string.
     */
    getBlockSysFee(index: number): Promise<string>;
    /**
     * Gets the number of peers this node is connected to.
     * @return {Promise<number>}
     */
    getConnectionCount(): Promise<number>;
    /**
     * Gets the state of the contract at the given scriptHash.
     */
    getContractState(scriptHash: string): Promise<object>;
    /**
     * Gets a list of all peers that this node has discovered.
     */
    getPeers(): Promise<object>;
    /**
     * Gets a list of all transaction hashes waiting to be processed.
     */
    getRawMemPool(): Promise<string[]>;
    /**
     * Gets a transaction based on its hash.
     */
    getRawTransaction(txid: string, verbose?: number): Promise<any>;
    /**
     * Gets the corresponding value of a key in the storage of a contract address.
     */
    getStorage(scriptHash: string, key: string): Promise<string>;
    /**
     * Gets the transaction output given a transaction id and index
     */
    getTxOut(txid: string, index: number): Promise<any>;
    /**
     * Gets the list of validators available for voting.
     */
    getValidators(): Promise<Validator[]>;
    /**
     * Gets the version of the NEO node. This method will never be blocked by version. This method will also update the current Client's version to the one received.
     */
    getVersion(): Promise<string>;
    /**
     * Calls a smart contract with the given parameters. This method is a local invoke, results are not reflected on the blockchain.
     */
    invoke(scriptHash: string, ...params: any[]): Promise<RPCVMResponse>;
    /**
     * Submits a contract method call with parameters for the node to run. This method is a local invoke, results are not reflected on the blockchain.
     */
    invokeFunction(scriptHash: string, operation: string, ...params: any[]): Promise<RPCVMResponse>;
    /**
     * Submits a script for the node to run. This method is a local invoke, results are not reflected on the blockchain.
     */
    invokeScript(script: string): Promise<RPCVMResponse>;
    /**
     * Sends a serialized transaction to the network.
     */
    sendRawTransaction(transaction: BaseTransaction | string): Promise<boolean>;
    /**
     * Submits a serialized block to the network.
     */
    submitBlock(block: string): Promise<any>;
    /**
     * Checks if the provided address is a valid NEO address.
     */
    validateAddress(addr: string): Promise<boolean>;
}
export default RPCClient;
//# sourceMappingURL=RPCClient.d.ts.map