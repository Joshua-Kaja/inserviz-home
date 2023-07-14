import dashboardIcon from '../Pages/assets/dashbaord.svg'
import profile from '../Pages/assets/profile.svg'
import appliedJobs from '../Pages/assets/appliedJobs1.svg'
import bookmark from '../Pages/assets/bookmark.svg'
import EditResume from '../Pages/assets/Edit_Resume.svg'
import viewResume from '../Pages/assets/view.svg'
import settings from '../Pages/assets/settings.svg'
import logout from '../Pages/assets/logout.svg'

export  const SideBarData = [
    {icon:dashboardIcon, name:'DashBoard', id:1, path:'/dashboard'},
    {icon:profile, name:'Profile', id:2, path:'/profile'},
    {icon:appliedJobs, name:'Applied Gigs', id:3, path:'/appliedJobs'},
    {icon:bookmark, name:'Bookmark Gigs', id:4, path:'/bookmark'},
    {icon:EditResume, name:'Edit Transcript', id:5, path:'/editTranscript'},
    {icon:viewResume, name:'View Transcript', id:6, path:'/viewTranscript'},
    {icon:settings, name:'Settings', id:7, path:'/settings'},
    {icon:logout, name:'Logout', id:8, path:'/logout'},
]