import ProfileCard from "../components/profile-card";

export default function ProfilePage(){
  return(
    <div className="flex  flex-col  w-full pt-20 pb-20 rounded-md mt-[10%] gap-32 h-fit justify-start">
      <ProfileCard/>
    </div>
  )
}