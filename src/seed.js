import itemsDB from './firebase.conf'
import storageDB from './firebase.conf'

const defaultItem = [
  {
    itemImageSrc : "https://firebasestorage.googleapis.com/v0/b/project-407f3.appspot.com/o/image%2Fstore%20product%2FStrawberry%20Pi%20Case.jpg?alt=media&token=4f180241-4eaa-476c-b50b-3aa08c37c780",
    itemImageAlt : "placeholder",
    itemDescription : "Strawberry Pi 3 Model B",
    itemPrice : "49.95",
  },
  {
    itemImageSrc : "https://firebasestorage.googleapis.com/v0/b/project-407f3.appspot.com/o/image%2Fstore%20product%2FStrawberry%20Pi%20Case.jpg?alt=media&token=4f180241-4eaa-476c-b50b-3aa08c37c780",
    itemImageAlt : "placeholder",
    itemDescription : "Strawberry Pi Zero",
    itemPrice : "29.95",
  },
  {
    itemImageSrc : "https://firebasestorage.googleapis.com/v0/b/project-407f3.appspot.com/o/image%2Fstore%20product%2FStrawberry%20Pi%20Case.jpg?alt=media&token=4f180241-4eaa-476c-b50b-3aa08c37c780",
    itemImageAlt : "placeholder",
    itemDescription : " Strawberry Pi Case ",
    itemPrice : "10.95",
  },
  {
    itemImageSrc : "https://firebasestorage.googleapis.com/v0/b/project-407f3.appspot.com/o/image%2Fstore%20product%2FStrawberry%20Pi%20Case.jpg?alt=media&token=4f180241-4eaa-476c-b50b-3aa08c37c780",
    itemImageAlt : "placeholder",
    itemDescription : " Strawberry Pi Extension Kit ",
    itemPrice : "149.95",
  }
];

var catalog = 
{ 
  "Popular Items": [
      {
          "itemImageSrc" : "https://firebasestorage.googleapis.com/v0/b/project-407f3.appspot.com/o/image%2Fstore%20product%2FStrawberry%20Pi%203%20Model%20B.jpg?alt=media&token=522bd7c0-dc58-490e-9b56-2a341cc4c480",
          "itemImageAlt" : "placeholder",
          "itemDescription" : "Strawberry Pi 3 Model B",
          "itemPrice" : "49.95",
     },
      {
          "itemImageSrc" : "https://firebasestorage.googleapis.com/v0/b/project-407f3.appspot.com/o/image%2Fstore%20product%2FStrawberry%20Pi%20Zero.jpg?alt=media&token=5ce91366-458c-4476-9415-7ba989d33939",
          "itemImageAlt" : "placeholder",
          "itemDescription" : "Strawberry Pi Zero",
          "itemPrice" : "29.95",
      },
      {
          "itemImageSrc" : "https://firebasestorage.googleapis.com/v0/b/project-407f3.appspot.com/o/image%2Fstore%20product%2FStrawberry%20Pi%20Case.jpg?alt=media&token=4f180241-4eaa-476c-b50b-3aa08c37c780",
          "itemImageAlt" : "placeholder",
          "itemDescription" : " Strawberry Pi Case ",
          "itemPrice" : "10.95",
      },
      {
          "itemImageSrc" : "https://firebasestorage.googleapis.com/v0/b/project-407f3.appspot.com/o/image%2Fstore%20product%2FCompute%20Model%20Kit.jpg?alt=media&token=2ef55dd4-69fd-434e-b3ae-a7e7b0e3e82a",
          "itemImageAlt" : "placeholder",
          "itemDescription" : " Strawberry Pi Extension Kit ",
          "itemPrice" : "149.95"
      }
  ],
  "Strawberry Pi": [
      {
          "itemImageSrc" : "https://firebasestorage.googleapis.com/v0/b/project-407f3.appspot.com/o/image%2Fstore%20product%2FStrawberry%20Pi%203%20Model%20B.jpg?alt=media&token=522bd7c0-dc58-490e-9b56-2a341cc4c480",
          "itemImageAlt" : "placeholder",
          "itemDescription" : " Strawberry Pi 3 Model B ",
          "itemPrice" : "49.95",
      },
      {
          "itemImageSrc" : "https://firebasestorage.googleapis.com/v0/b/project-407f3.appspot.com/o/image%2Fstore%20product%2FStrawberry%20Pi%202%20Model%20B.jpg?alt=media&token=1fce3c5f-b8b5-48cb-b1d6-fb0bfeb1eb33",
          "itemImageAlt" : "placeholder",
          "itemDescription" : " Strawberry Pi 2 Model B ",
          "itemPrice" : "29.95",
      },
      {
          "itemImageSrc" : "https://firebasestorage.googleapis.com/v0/b/project-407f3.appspot.com/o/image%2Fstore%20product%2FStrawberry%20Pi%201%20Model%20A.jpg?alt=media&token=b94816ab-84dc-48fd-9ea6-b3bf0fcdf107",
          "itemImageAlt" : "placeholder",
          "itemDescription" : " Strawberry Pi 1 Model A ",
          "itemPrice" : "10.95",
     },
      {
          "itemImageSrc" : "https://firebasestorage.googleapis.com/v0/b/project-407f3.appspot.com/o/image%2Fstore%20product%2FStrawberry%20Pi%20Zero.jpg?alt=media&token=5ce91366-458c-4476-9415-7ba989d33939",
          "itemImageAlt" : "placeholder",
          "itemDescription" : " Strawberry Pi Zero ",
          "itemPrice" : "149.95",
      }
  ],
  "Strawberry Pi Acessories": [
      {
          "itemImageSrc" : "https://firebasestorage.googleapis.com/v0/b/project-407f3.appspot.com/o/image%2Fstore%20product%2FCamera%20Module%20V2.jpg?alt=media&token=934534e7-9320-492d-b90f-20dfcda24af0",
          "itemImageAlt" : "placeholder",
          "itemDescription" : " Strawberry Pi Camera Module V2 ",
          "itemPrice" : "49.95",
      },
      {
          "itemImageSrc" : "https://firebasestorage.googleapis.com/v0/b/project-407f3.appspot.com/o/image%2Fstore%20product%2FCompute%20Module.jpg?alt=media&token=b770f948-bfc1-4b3c-9521-a27099ebb374",
          "itemImageAlt" : "placeholder",
          "itemDescription" : " Strawberry Pi Compute Module ",
          "itemPrice" : "49.95",
      },
      {
          "itemImageSrc" : "https://firebasestorage.googleapis.com/v0/b/project-407f3.appspot.com/o/image%2Fstore%20product%2FSense%20Hat.jpg?alt=media&token=8ae50a0f-8d07-4133-b34e-af6422b30119",
          "itemImageAlt" : "placeholder",
          "itemDescription" : " Strawberry Pi Sense Hat ",
          "itemPrice" : "29.95",
      },
      {
          "itemImageSrc" : "https://firebasestorage.googleapis.com/v0/b/project-407f3.appspot.com/o/image%2Fstore%20product%2FStrawberry%20Pi%20Case.jpg?alt=media&token=4f180241-4eaa-476c-b50b-3aa08c37c780",
          "itemImageAlt" : "placeholder",
          "itemDescription" : " Strawberry Pi Case ",
          "itemPrice" : "10.95",
     },
      {
          "itemImageSrc" : "https://firebasestorage.googleapis.com/v0/b/project-407f3.appspot.com/o/image%2Fstore%20product%2FCompute%20Model%20Kit.jpg?alt=media&token=2ef55dd4-69fd-434e-b3ae-a7e7b0e3e82a",
          "itemImageAlt" : "placeholder",
          "itemDescription" : " Strawberry Pi Extension Kit ",
          "itemPrice" : "149.95",
      }
  ]
};

itemsDB.push(defaultItem)

itemsDB.push(catalog)