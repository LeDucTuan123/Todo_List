import className from 'classnames/bind';
import Style from './ListTodo.module.scss';
import {CSVLink} from 'react-csv';

const cx = className.bind(Style);
const ListTodo = (props) => {
    let {item, dataExport, search, handleDeleteTodo, handleShowEdit, handleExportUser} = props;

    return (
        <>
            <div>
                <button className={cx('btn-export')}>
                    <CSVLink
                        className={cx('export')}
                        filename="Data-User.xlsx"
                        data={dataExport}
                        onClick={handleExportUser}
                        asyncOnClick={true}
                    >
                        Export
                    </CSVLink>
                </button>
            </div>
            <div className={cx('title')}>
                <h3>List Todo</h3>
            </div>
            <table id={cx('customers')}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Education</th>
                        <th>Level</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {item
                        .filter((item) => {
                            return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search);
                        })
                        .map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.education}</td>
                                    <td>{item.level}</td>
                                    <td>
                                        <button
                                            className={cx('btn btn-warning m-1')}
                                            onClick={() => handleShowEdit(item)}
                                        >
                                            Update
                                        </button>
                                        <button
                                            className={cx('btn btn-danger')}
                                            onClick={() => handleDeleteTodo(item.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </>
    );
};

export default ListTodo;
