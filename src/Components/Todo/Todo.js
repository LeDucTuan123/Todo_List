import Title from '../../Components/Title/Title';

import className from 'classnames/bind';
import Style from './todo.module.scss';
import Search from '../../Components/Search/Search';
import Form from '../../Components/Form/Form';
import ListTodo from '../../Components/ListTodo/ListTodo';

import {useState} from 'react';

const cx = className.bind(Style);

let itemTodo = {
    id: 1,
    name: 'Lê Đức Tuấn',
    education: 'Cao Đẳng',
    level: 'Medium',
};
function Todo() {
    const [item, setItem] = useState([itemTodo]);

    const [name, setName] = useState('');
    const [education, setEducation] = useState('');
    const [level, setLevel] = useState('');

    const [editing, setEditing] = useState(false);
    const [edit, setEdit] = useState({});
    const handleShowEdit = (item) => {
        setEditing(true);
        setName(item.name);
        setEducation(item.education);
        setLevel(item.level);
        setShowForm(true);
        setEdit(item);
    };
    const [search, setSearch] = useState('');
    const [showForm, setShowForm] = useState(false);

    const OnchangeName = (e) => {
        setName(e.target.value);
    };
    const OnchangeEducation = (e) => {
        setEducation(e.target.value);
    };

    const OnchangeLevel = (e) => {
        setLevel(e.target.value);
    };
    //sdsd
    const handleAddTodo = () => {
        if (!name || !education || !level) {
            alert('Vui lòng nhập đủ thông tin');
            return;
        }

        let id = Math.floor(Math.random() * 100);
        setItem((prev) => [
            ...prev,
            {
                id: id,
                name,
                education,
                level,
            },
        ]);

        // ref.current.focus();
        setName('');
        setEducation('');
    };

    const handleDeleteTodo = (id) => {
        const remove = item.filter((item) => item.id !== id);
        setItem(remove);
    };

    const handleUpdateTodo = () => {
        const updateTodo = item.map((item) => {
            if (item.id === edit.id) {
                return {
                    ...item,
                    name,
                    education,
                    level,
                };
            }
            return item;
        });
        setItem(updateTodo);
        setName('');
        setEducation('');
        setEditing(false);
    };

    const OnchangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleShowForm = (a) => {
        setShowForm(a);
    };
    const CancelForm = (a) => {
        setEditing(a);
    };

    return (
        <div className={cx('container')}>
            <div className={cx('row')}>
                <div className={cx('col-sm-6')}>
                    <Title />
                    <Search OnchangeSearch={OnchangeSearch} />
                </div>
                <div className={cx('col-sm-6')}>
                    <div className={cx('form')}>
                        <Form
                            OnchangeName={OnchangeName}
                            OnchangeEducation={OnchangeEducation}
                            OnchangeLevel={OnchangeLevel}
                            name={name}
                            education={education}
                            level={level}
                            // ref={ref}
                            handleAddTodo={handleAddTodo}
                            handleUpdateTodo={handleUpdateTodo}
                            showEditing={editing}
                            showForm={showForm}
                            handleShowForm={handleShowForm}
                            CancelForm={CancelForm}
                        />
                    </div>
                </div>
            </div>
            <div style={{marginTop: '-50px'}}>
                <hr style={{marginTop: '100px'}} />
                <ListTodo
                    item={item}
                    search={search}
                    handleDeleteTodo={handleDeleteTodo}
                    handleShowEdit={handleShowEdit}
                />
            </div>
        </div>
    );
}

export default Todo;
