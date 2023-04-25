import className from 'classnames/bind';
import Style from './Form.module.scss';

const cx = className.bind(Style);

const Form = (props) => {
    let {
        name,
        education,
        level,
        OnchangeName,
        OnchangeEducation,
        OnchangeLevel,
        handleAddTodo,
        handleUpdateTodo,
        showEditing,
        showForm,
        handleShowForm,
        CancelForm,
    } = props;
    const handleShow = () => {
        handleShowForm(true);
    };
    const handleCancel = () => {
        CancelForm(false);
        handleShowForm(false);
    };

    return (
        <div className={cx('wrapper')}>
            <button className={cx(showEditing ? 'update-item' : 'add-item')} onClick={handleShow}>
                {showEditing ? 'Update' : 'Add'}
            </button>
            {showForm ? (
                <>
                    <form className="form-inline">
                        <div className={cx('row')}>
                            <div className={cx('col-sm-4')}>
                                <input
                                    className={cx('input')}
                                    value={name}
                                    // ref={ref}
                                    placeholder="Họ và tên"
                                    onChange={OnchangeName}
                                />
                            </div>
                            <div className={cx('col-sm-4')}>
                                <input
                                    className={cx('input')}
                                    value={education}
                                    placeholder="Học vấn"
                                    onChange={OnchangeEducation}
                                />
                            </div>
                            <div className={cx('col-sm-4')}>
                                <div className="form-group">
                                    <select className="form-control" value={level} onChange={OnchangeLevel}>
                                        <option value=""></option>
                                        <option>Small</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className={cx('mt-2')}>
                            <button
                                type="button"
                                name={props.name}
                                className={cx('button-submit')}
                                onClick={showEditing ? handleUpdateTodo : handleAddTodo}
                            >
                                Submit
                            </button>
                            <button type="button" className={cx('button-cancel')} onClick={handleCancel}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </>
            ) : (
                <span></span>
            )}
        </div>
    );
};

export default Form;
