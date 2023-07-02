import styled from "./SideBar.module.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';

export const SideBar = () => {
    return (
        <div className={styled.side}>
            <div className={styled.top}>
                <h1>logo</h1>
            </div>
            <div className={styled.center}>
                <div className={styled.container}>
                    <h4>Main</h4>
                    <ul className={styled.wrapper}>
                        <li>
                            <DashboardIcon />
                            <span>Dashboard</span>
                        </li>
                    </ul>
                </div>
                <div className={styled.container}>
                    <h4>User Options</h4>
                    <ul className={styled.wrapper}>
                        <li>
                            <PersonIcon />
                            <span>Users</span>
                        </li>
                        <li>
                            <StoreIcon />
                            <span>Products</span>
                        </li>
                        <li>
                            <CreditCardIcon />
                            <span>Orders</span>
                        </li>
                        <li>
                            <LocalShippingIcon />
                            <span>Delivery</span>
                        </li>
                    </ul>
                </div>
                <div className={styled.container}>
                    <h4>Useful</h4>
                    <ul className={styled.wrapper}>
                        <li>
                            <EqualizerIcon />
                            <span>Stats</span>
                        </li>
                        <li>
                            <NotificationsActiveIcon />
                            <span>Notifications</span>
                        </li>
                    </ul>
                </div>
                <div className={styled.container}>
                    <h4>Service</h4>
                    <ul className={styled.wrapper}>
                        <li>
                            <HealthAndSafetyIcon />
                            <span>System Health</span>
                        </li>
                        <li>
                            <ListAltIcon />
                            <span>System Logs</span>
                        </li>
                        <li>
                            <SettingsSuggestIcon />
                            <span>System Settings</span>
                        </li>
                    </ul>
                </div>
                <div className={styled.container}>
                    <h4>User Account</h4>
                    <ul className={styled.wrapper}>
                        <li>
                            <GroupIcon />
                            <span>User Profile</span>
                        </li>
                        <li>
                            <LogoutIcon />
                            <span>Logout</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styled.bottom}>
                <div className={styled.container}>
                    <h4>Them</h4>
                    <ul className={styled.wrapper}>
                        <li>
                            <GroupIcon />
                            <span>User Profile</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
