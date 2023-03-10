import set1 from '../../assets/image/set1.png'
//  import Vector from '../../assets/images/Views/Vector.svg'
 import set2 from '../../assets/image/set2.png'
 import set3 from '../../assets/image/set3.png'
 import { AntDesign } from '@expo/vector-icons'; 

 const data=[
    {
        image:require('../../assets/image/set1.png'),
        title:'Personal Information',
        arrow:<AntDesign name="right" size={20} color="
        rgba(122, 122, 122, 1)" />

    },
    {
        image:require('../../assets/image/set2.png'),
        title:'Contact Information',
        arrow:<AntDesign name="right" size={20} color="
        rgba(122, 122, 122, 1)" />
    },
    {
    image:require('../../assets/image/set3.png'),
    title:'Uploaded documents',
    arrow:<AntDesign name="right" size={20} color="
    rgba(122, 122, 122, 1)" />
    },

   
]
export default data;