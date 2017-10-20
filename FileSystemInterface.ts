export default interface FileSystemInterface {

    /**
     *
     * @param {string} fileName
     * @param {string} content
     * @returns {Promise<void>}
     */
    writeFile(fileName: string, content: string): Promise<void>

    /**
     *
     * @param {string} fileName
     * @returns {Promise<boolean>}
     */
    fileExist(fileName: string): Promise<boolean>;

    /**
     *
     * @param {string} fileName
     * @returns {Promise<any>}
     */
    readFile(fileName:string) : Promise<any>;

    /**
     *
     * @param {string} fileName
     * @returns {Promise<void>}
     */
    deleteFile(fileName:string) : Promise<void>;

}