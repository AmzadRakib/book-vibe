import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Book from '../Book/Book';
import { getStoredReadList } from '../../Utility/addToDB';

const ListedBooks = () => {
    const allBooks = useLoaderData()
    const [readList, setReadList] = useState([])

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id))
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadList(readBookList)
    }, [])
    return (
        <div>
            <h2 className="text-5xl text-center my-7">Listed Books</h2>
            <Tabs className='my-5' >
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books I Read: {readList.length} </h2>
                    {
                        readList.map(book => <Book book={book} key={book.bookId}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>Books I Want To Read</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;