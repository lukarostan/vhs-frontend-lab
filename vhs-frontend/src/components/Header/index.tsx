import './style.scss'

export const Header = ({onAddEntry}) => {
    return <header className='page-header'>
        <button onClick={onAddEntry}>Add entry</button>
    </header>
}