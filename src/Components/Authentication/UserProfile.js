import {React} from 'react'

function UserProfile({settedUserName}) {

//   const RedirectTologgedIn = ()=> {
//         //navigate('/Login');
//         // setTimeout(() => {
            
//         // }, 3000);
//     }
  
  return (
         <>
      {settedUserName ? (
        <div>
          <div>Profile Details are below</div>
          <div className="container">
            User Name : {settedUserName}
          </div>
        </div>
      ) : ( 
        // If settedUserName is not truthy, navigate to "/Login"
        <div>You are not authized 
            {/* {RedirectTologgedIn()} */}
        </div>
      )}
    </>
  )
}

export default UserProfile