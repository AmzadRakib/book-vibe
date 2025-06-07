import { toast } from "react-toastify";

const getStoredReadList = () => {
    // read-list 
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        // Already exist do not add it 
        console.log(id, 'already exist in the read list')
    }
    else {
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr)
        toast('Book Added In Your Read List')
    }
}
export { addToStoredReadList, getStoredReadList }