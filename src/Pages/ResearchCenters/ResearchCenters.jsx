import React, { useState } from 'react'
import Ipcard from '../../Components/Ipcard/Ipcard'
import Fpcard from '../../Components/Fpcard/Fpcard'
import Stcard from '../../Components/Stcard/Stcard'

const ResearchCenters = () => {
    const [centerId, setCenterId] = useState('')
    const [selected,select] = useState(false)
    function selection(id){
        if(!centerId )
            setCenterId(id)

        select(!selected)
    }
    const researchCenters = [
        {
            centerName: "Web Development Research Center",
            advisors: "John Doe, ABC Corp",
            focus: "Advanced web technologies",
            locationUrl: "https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6",
            address: "123 Web Development Street, City, Country"
        },
        {
            centerName: "Data Science Research Center",
            advisors: "Jane Smith, XYZ Ltd",
            focus: "Data analysis and machine learning",
            locationUrl: "https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6",
            address: "456 Data Science Avenue, City, Country"
        },
        {
            centerName: "Digital Marketing Research Center",
            advisors: "Michael Johnson, DEF Tech",
            focus: "Digital marketing strategies",
            locationUrl: "https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6",
            address: "789 Digital Marketing Boulevard, City, Country"
        },
        {
            centerName: "Cybersecurity Research Center",
            advisors: "Emily Davis, GHI Solutions",
            focus: "Network security and cyber defense",
            locationUrl: "https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6",
            address: "1011 Cybersecurity Road, City, Country"
        },
        {
            centerName: "Financial Analysis Research Center",
            advisors: "Robert Brown, JKL Innovations",
            focus: "Financial modeling and risk management",
            locationUrl: "https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6",
            address: "1213 Financial Analysis Lane, City, Country"
        },
        {
            centerName: "Network Design Research Center",
            advisors: "William Wilson, MNO Enterprises",
            focus: "Network architecture and implementation",
            locationUrl: "https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6",
            address: "1415 Network Design Drive, City, Country"
        },
        {
            centerName: "Business Process Research Center",
            advisors: "Elizabeth Martinez, PQR Systems",
            focus: "Business process management",
            locationUrl: "https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6",
            address: "1617 Business Process Avenue, City, Country"
        },
        {
            centerName: "Software Quality Research Center",
            advisors: "Charles Garcia, STU Networks",
            focus: "Software testing and quality assurance",
            locationUrl: "https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6",
            address: "1819 Software Quality Street, City, Country"
        },
        {
            centerName: "Machine Learning Research Center",
            advisors: "Patricia Robinson, VWX Dynamics",
            focus: "Machine learning and AI applications",
            locationUrl: "https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6",
            address: "2021 Machine Learning Avenue, City, Country"
        },
        {
            centerName: "Project Management Research Center",
            advisors: "Christopher Lee, YZA Group",
            focus: "Project planning and execution",
            locationUrl: "https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6",
            address: "2223 Project Management Road, City, Country"
        }
    ];
    
    
  return (
    <div>
        <div className=' mt-1 mb-2'>
        <div className='flex text-center items-center justify-center w-full'><h1 className='text-[#82001a] font-semibold text-[22px] pb-4'>Research Centers</h1></div>
        </div>
        <div className='bg-gray-100 pt-3 px-4 '>
            {
                researchCenters.map((center,index)=>(
                    <div>
                        {  index%2===0 &&
                                <div className='bg-white w-[70%] shadow-xl h-[250px] ml-[5%] mb-4 flex p-2 m-2 rounded-2xl transform duration-500 hover:scale-[103%] '>
                                <div className='w-[25%] h-full '>
                                    <img className='h-full rounded-2xl' src='https://images.adsttc.com/media/images/64db/bedd/fbc6/5840/d273/0e5b/medium_jpg/european-spallation-source-buro-happold-plus-henning-larsen-plus-cobe-plus-sla-architects_21.jpg?1692122872'></img>
                                </div>
                                <div className='w-[75%] ml-5'>
                                    <h1 className='text-[22px] text-[#82001a] font-semibold hover:underline cursor-pointer' onClick={selection}>{center.centerName}</h1>
                                    <h1 className='text-[16px] mt-2'>{center.focus}</h1>
                                    <h1 className='text-[16px] mt-3'><span className='font-semibold'>Advisors: </span>{center.advisors}</h1>
                                    <h1 className='font-semibold test-[16px] mt-4'>Address:</h1>
                                    <h1 className='text-[16px] mb-3'>{center.address}</h1>
                                    <a  className='underline' href={center.locationUrl} target='_blank'>
                                        <div className='flex mt-3 items-center cursor-pointer' >
                                            <img className='h-[20px]  mr-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavj9_Ks_pfBuHO-3VMC8kxky4mR6ntn-iCg&s'></img>
                                            <h1>Location</h1>
                                        </div>
                                    </a>
                                </div>
                
                
                            </div>

                        }
                        { index%2!==0 &&
                                <div onClick={selection} className='bg-white w-[70%] h-[250px] flex ml-[25%] p-2 m-3 rounded-2xl shadow-xl transform duration-500 hover:scale-[103%] '>
                                <div className='w-[25%] h-full'>
                                    <img className='h-full rounded-2xl' src='https://images.adsttc.com/media/images/64db/bedd/fbc6/5840/d273/0e5b/medium_jpg/european-spallation-source-buro-happold-plus-henning-larsen-plus-cobe-plus-sla-architects_21.jpg?1692122872'></img>
                                </div>
                                <div className='w-[75%] ml-5 justify-end'>
                                    <h1 className='text-[22px] text-[#82001a] font-semibold hover:underline cursor-pointer '>Aryashu Labs</h1>
                                    <h1 className='text-[16px] mt-2'>Focus</h1>
                                    <h1 className='text-[16px] mt-3'><span className='font-semibold'>Advisors: </span></h1>
                                    <h1 className='font-semibold test-[16px] mt-4'>Address:</h1>
                                    <h1 className='text-[16px] mb-3'>Vignana Jyothi Nagar,Pragathi Nagar, Nizampet.S.O, Hyderabad, Telangana 500090</h1>
                                    <a  className='underline' href='https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6' target='_blank'>
                                        <div className='flex mt-3 items-center cursor-pointer' >
                                            <img className='h-[20px]  mr-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavj9_Ks_pfBuHO-3VMC8kxky4mR6ntn-iCg&s'></img>
                                            <h1>Location</h1>
                                        </div>
                                    </a>
                                </div>


                            </div>
    
                        }
                  
                    </div>
            
                ))
            }
            {
                selected &&
                <div className='fixed top-0 left-0 w-full h-full z-50  flex items-center justify-center bg-gray-500 bg-opacity-50' >
                      
                    <div className='bg-white w-[80%] h-[100%] overflow-y-auto ' style={{ overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        <div className='m-4'>
                            <img className='h-[30px] cursor-pointer' onClick={selection} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAeFBMVEX////u7u4AAADt7e3s7Oz9/f329vb8/Pz4+Pjx8fH39/fw8PD19fXv7+9wcHBmZmZhYWGQkJCdnZ2lpaVSUlK3t7fX19cdHR3j4+OsrKzd3d3Q0NB2dnZHR0e9vb0sLCwXFxcMDAwzMzN/f388PDyIiIjHx8clJSVKJKPxAAALpklEQVR4nO1daWOiMBANJhCO4FGr4t1Wt/3//3BVckwCwRCp2pZ862x4+x7EZIbMBIR4i4KyZSE3sPJvnFBuiHFpyUWPlJQGYscgaDgQ7cUTw5lHgAwQrECwCVJeg68SwQ1iPDCceQSIli2MsrIlNNQNTBjS3OghDHloxcg1MX4YzjwylPCWclWU2QxMGMxLwsyOAcRMUOaH4cqDIv6ESMqfWZiXj5XE3EAT/pyZ6JFxQySGBmnAgGKIJ4YrjxoxfNCaIIEC4dc0EFEYmhhPDFcevZheTC/GTwxOjS5NIJaZqBbDJqYNhisPxHiLRROGVBgibojMHsw01GBoi6YnhjMPKSoiZcuVK1I24EYYPVJuIA0YFXfGA6M1j1/paPZiejG9mD8pBpcNRHhlA1Oi0SPlPYgdozo1t8dw5oGlByBWnOtxBBJuhDSQBoz6eKYdhiuPG3yzpsBKYTT7Zm4Yrjx+paPZi+nF9GIcxQj3WYFwgwLhBmb2iFwwNDGeGK48UMSbiIHStLUhtmOkmhg/DHceSlQfnJXj3I7RO5q9mF7MzxCDOxBTwfAQ489DiWEVkKvbbwKV2DGubgM6YDjzCIQ7E4iVlybcEJsGZhrkyosbMOCiiT0xXHn8Lt+sF9OL6cX8YTHiJRwIikoDCIpKAzN7KCINGNbgrAWGKw+U8sZkdMRbxAxDahpi01CDoS2anhjOPKQo7kbgTCy03I0IKm4EeC3Kh4Ydw+bOtMFw5vFbHc1eTC+mF+MTnN2W1ljB8Ehr9Och0xppWqbiZYlIzWOZkXiXimQ905CFdgw9rdEPw5VHItIaM5kbmGSGQaBFNoNISazDMNIavTBcedCTOxOcXAItnRBfDNAnuvQBCTiXv7VdLyuGNa2xBYYrj9/laPZiejG9mFuDM1wfFKlZhPfADYGVwrDMZq0wXHnInTN7S22Gyj/UNG3R9MRw5qFEWXJWSCVnBbgRvIsdw5Y70wbDmQdWYvgA/B2OZi+mF9OL+aZMwMfMZg48sAzOIrMIqmKwB1Z2DPfgrAMedcEZN8RGDJQxEQzKsEkUvVUDK4mheQB5A0ZZBHcTj+epOcMnFSzAN/G4xdFkiM53u89uHE32OdvN4xQ/yGvGtNhsPz6Ow1VIbhaTvB73H9tDkcateXQTArDXkuUbZbeKibdlnzGh7Xl0IIagjaA5Kje+bxAzEp0ODxpmSNIcLC9q/MUsF6LTPu9ATFOtV6CD0EsPHBEl5qNgNox6MVRLsJ4fZaf3dUse2mwmIx25U2UzRLqBYiVmsLlESDUYes2ZiXHpQpONAnpf0ZY8gEGJ4m4FSCesD4pUj4XisJ9ZMOrdGZiSmEfLLwX0yoLWPDoJzqbg0WzXtRgOjiabvwKcWZy35tGJ1xyA4TE4JH5iEnKAwzWP2/PoRAydbxWNxZL6iImz5Tt4vvOHxTMxm4Gbelz5iEHFHvz6lw8MzvQhMsxSj2EGfzD/4vuJqe5YpXCgDWa0fSYgnEReV748hJiwbCjKL+2cO1AaWGAYYtNwehBo9gbYFEkFQxNTwUAFuPprhnx5lNfkHjVncm0+G+J/8NbSKoYtnilvNhxkB3TeTvLkUTYuxrvWawX5LKsYDb5ZTl/gnSjOW7EPrjnbgfV7sG4hBtM1mJXfd3Zn1YlHJ2LQBN7e1FnMyVMdgysn9FYenYhhcKBNnMVkbAKXy5jZY6I7itGmpP2noxgczsByOVjxaf3hYrSBNl45icnZCg6yqUjSfnzNWXwEvCY6hiWtkaXwDgyTbmrORL2WDHU8DKgAo3+/Q6nqoS2a6pI03AEti1Xo899WeYh2U61XCD3O8SpucGf43S3gIJvF4MX542vO8BBwmyQC1OZo5gkcZAeSPNeWBnQEFrtrYiI4yLbr+Nn2Z2YwkC+axTACnO2vJcufTUzyD0wCB9okJotBGPT+L7j4ZE8lRvc4PxvEEASni+3Fv3y6mrPdh6K4J1YxOIWR8huP6DquORN3RBqu5kaa9WJaDG0RQwKM4Mx3QLmGcQuPwCd3JuPX6HkvhBHoCMxO1vrgbAmDU6Rh3Mijw6wmQudgDlisYlzrm82h5BXSMZ7A0RTHrCAYQ4/ypPJkzptt2vKKzKNankYMoTCmf3uh1ScToSkYZK9h8rxiUrQGS+d2HaWmmHgNlsv9mpEajKcRg5ZgEG2K0BDDCNy9mLK8i0N0vk9MNlJs35ZUFxNEcCY7+5fffCAIuvFAELhBcZzrYhicyY7rCDccCOLDQwZnlaMPK4cjptYDFeHfFPoqQ/2NZgKCmMWSUhuGLw8pqlodwR9zy5qzBP4sBktNjPaDSu0Ynjy6T9HCkbYTBqQt4Vuc11UDhiePb8g3y0O4lGzUk1nCQTZtxHgaMZil0OOsbwfUiPE0Yk6TqRba1LWtCEWfXkyA6edbo5Z3+ZLgB9ScJZrHWW0T9N01Z4mRLFhNJ7QZsioGaxpor0maOGC05pEgfqR+nvL9QJrkhoHxY/cjs4cwoLyCEa8bxMxPd9ABozWPEAWYBFnuk07Y5FfhcGLV8hI6YrjyUCv/yW9NSYaiWzLwKkQynLGtRcswd8Nw3wYMEeOS02LzNXgbi8yozoqB0tW+XszcHcONB12PFoP95jzbi8E9bQ1yhUi8q5PyNmuD4cBDvoU7Z6pJp5x0LEb3OEU75N2KwUx6fK9M5Sa+dCwGsxpHYLxqhXGdBwFL2lqJ2QgQ14M4murFzhY94C9v3rolxlUeBKk7tlNihkg/uj4yY6BKUFQxyEtKDIrm+kgbzWlbjGs8UiBmqcSMypvTaZUGJVOV+7iYke+o0rCIuYzJbutnEkamw7OexWZWeGJc4XE/MTg/jQZSFCSPvTGeRkx5QS4djp8v5nsx/oKY7meze2DUihkiS61XbAZFpsEeR90BwyaGhzw8XItlUCS+miaDokyPkmoCq7th5EDMrMadcQ2Kuv1GmScGuSKG/+A6OtzgmzF6Mb2YXkyXYmjGs9NBrVdpALVeugHhcs6UlyD+RksaQiZecQmDfCsmMcoMeMXdjQeuFzNErLmiq1IFdvmDndZhWX5sNJu9piEaN/0vVh5RvRiLO3PlII6AFbOpaC+iWQ1TW4/pkjs0rQ8E6dDRjNYw4+KWtinfDzzOa8ZsPq4j5tVGxWPFBOG0jpZfWywfKybLmzdi2rUDe6gYvejs1jYiHYtpt2OVMfvORft2iJUYdx6WeCYvP+3Mmwwf5KohPw8toqQsQ93+ZrSPULvxqBfTIp4JlKHobjYbnvNo29acWTyA1r5ZGVh9jr7qmLVuH4f5JU/4sY5mMZt00XbB5Yf9cK9Z+BeECe8pNwxMJLomwr0Sp8aJHjTyK9PqPgQwPV6U5LrHG3KPV3rNoofymvt45m+J4cMbTol8eCO9R8Ou1/0wLGL4zlkle/C6obKndU+MpnfNoNbLEhRVD+Iw3xPfF+Mv7AL0YnoxvZiWO2c3E8EdiGmL0ebJNHxdpPqNMstd/VaMpuCsWlCQGQUF6OpXSu+J8Yd8s17Ms4kZ/kgxlhca4x8qRiXogeS5I/2JYjKqKr8+wfmRvC6gg49Q3xGDgWJKKGZWRmdiu0ulE4oXmKZB1nrJl49mj2/HiOExXnMg5nh2AZpqvZyrNO6JoX7/xxDUvb9fzin9YY4myAEdUfQJHk2R/jQxBUid3qUoAK+Kx0Wc/yAxJy2gXndPMqQVIQ3nTL6V9BjvrIPfTPXrwPVizh/nnQ/BAQQTdlK3AqeuDrZTVdomctQEqjh1XGWPiqok08BuxgiIXUxK8nNuXbxawvT8jzk7rS2xtvn1Pp58zi9PR0yacuIXs2ZkGphpkJf4YtCTauvO2eXhrHcvY61Kb5JkGNHQ2C96P27Ho1MbizYSrb3BF2O0mcWiGs7Mc0TF5NRp+7HQWI9Xp1GAgpztutku6rQtXliZPAO/Sn36K0+0amPZvSzLOf3Uog43Jrtru/K8VGMbMA/qtLyX9TL/ASZG9aJYRRyZAAAAAElFTkSuQmCC' alt=''/>
                        </div>
                          
                        <div className='  flex  p-2 m-3 rounded-2xl shadow-xl transform duration-500 hover:scale-[103%] '>
                        
                                <div className='w-[25%] h-full'>
                                    <img className='h-full rounded-2xl' src='https://images.adsttc.com/media/images/64db/bedd/fbc6/5840/d273/0e5b/medium_jpg/european-spallation-source-buro-happold-plus-henning-larsen-plus-cobe-plus-sla-architects_21.jpg?1692122872'></img>
                                </div>
                                <div className='w-[75%] ml-5 justify-end'>
                                    <h1 className='text-[22px] text-[#82001a] font-semibold '>Aryashu Labs</h1>
                                    <h1 className='text-[16px] mt-2'>Focus</h1>
                                    <h1 className='text-[16px] mt-3'><span className='font-semibold'>Advisors: </span></h1>
                                    <h1 className='font-semibold test-[16px] mt-4'>Address:</h1>
                                    <h1 className='text-[16px] mb-3'>Vignana Jyothi Nagar,Pragathi Nagar, Nizampet.S.O, Hyderabad, Telangana 500090</h1>
                                    <a  className='underline' href='https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6' target='_blank'>
                                        <div className='flex mt-3 items-center cursor-pointer' >
                                            <img className='h-[20px]  mr-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavj9_Ks_pfBuHO-3VMC8kxky4mR6ntn-iCg&s'></img>
                                            <h1>Location</h1>
                                        </div>
                                    </a>
                                </div>


                            </div>
                                    <h1 className='font-semibold text-navy-blue  m-4 text-[20px]'>Industry Partners : </h1>
                        <div className='m-4 flex flex-wrap'>
                            <Ipcard/>       
                        </div>
                        <h1 className='font-semibold text-navy-blue  m-4 text-[20px]'>Faculty Partners : </h1>
                        <div className='m-4 flex flex-wrap'>
                            <Fpcard/>
                        </div>
                        <h1 className='font-semibold text-navy-blue  m-4 text-[20px]'>Students : </h1>
                        <div className='m-4 flex flex-wrap'>
                            <Stcard/>       
                        </div>
                    </div>
                </div>
                
            }
        </div>
    </div>
  )
}

export default ResearchCenters