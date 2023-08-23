import React from 'react'
import { useLocation } from 'react-router-dom'
import ProfilePage from './account/ProfilePage'
import Edit from './account/Edit';
import EditProfile from './account/EditProfile';
import userProfileImage from "../assets/images/thumb.jpg"
import AddPost from './account/AddPost';
import Orders from './account/Orders';

const Dashboard = (props) => {

    const location = useLocation();
    const slugName = location.pathname.split("/dashboard/")[1];
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const order_id = searchParams.get('order_id');
    const filterType = searchParams.get('filter_type');

    const userInformation = {
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@gmail.com',
        country: 'USA',
        address: 'street',
        city: 'Albama',
        state: 'Albama',
        zipcode: '110011',
        website_url: 'google.com',
        bio: 'Biographical Info, this will show up in the author page.',
        thumb: userProfileImage,
        comment: "",
        offers: true,
        push: ''
    }

    const renderSwitch = (params) => {
        switch (params) {
            case "edit-post":
                return <Edit data={props?.data} id={id} />;
            case "edit-post/":
                return <Edit data={props?.data} id={id} />;
            case "add-post":
                return <AddPost />;
            case "edit-profile":
                return <EditProfile data={userInformation} />;
            case "orders":
                return <Orders data={userInformation} />;
            case "orders/":
                return <Orders data={userInformation} id={order_id} />;
            default:
                return <ProfilePage data={props?.data} filter={filterType} />;
        }
    };

    return (
        <div className='dashboard' id='dashboard'>
            {renderSwitch(slugName)}
        </div>
    )
}

export default Dashboard