import className from 'classnames/bind';
import Style from './Search.module.scss';

const cx = className.bind(Style);

const Search = (props) => {
    let {OnchangeSearch} = props;

    return (
        <div className={cx('wrapper')}>
            <input className={cx('input')} placeholder="Search name" onChange={OnchangeSearch} />
            <button className={cx('button')}>Search</button>
        </div>
    );
};

export default Search;
