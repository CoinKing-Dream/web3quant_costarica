import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const SubscribeButton = ({flag}) => {

    let className = "flex flex-row gap-2 justify-center rounded-full items-center text-white bg-[--ghost-accent-color] ";
    className += (flag?"px-8 py-3 text-xl fixed right-8 bottom-8":"text-xs font-bold py-1 px-4");

    return (
        <>
            <button className={className}>
                <div >{flag?<AccountCircleOutlinedIcon fontSize='large'/>:<EmailOutlinedIcon fontSize='small'/>}</div>
                <div>{flag?"Subscribe":"SUBSCRIBE"}</div>
            </button>
        </>
    )
}

export default SubscribeButton;