"use client"
import React from "react";
import Image from 'next/image'
import { useState } from 'react'
import Brick from '../../../public/assets/services/Brick .png'
import Brick from '../../../public/assets/services/Brick .png'
import Brown from '../../../public/assets/services/Brown.png'
import Kitchen from '../../../public/assets/services/Kitchen.png'
import Painting from '../../../public/assets/services/Painting.png'
import Plastering from '../../../public/assets/services/Plastering.png'
import Plumbing from '../../../public/assets/services/Plumbing.png'
import Power from '../../../public/assets/services/Power.png'
import Sheetrock from '../../../public/assets/services/Sheetrock.png'
import bathroom from '../../../public/assets/services/bithrom.png'
import Pointing2 from '../../../public/assets/services/painting.png'
import Roofing from '../../../public/assets/services/roofing.png'
import Water from '../../../public/assets/services/water.png'

const OurOtherServicesSection = () => {

  const services = [
    {
      title: 'Bathroom Remodeling',
      img: bathroom
    },
    {
      title: 'Sheetrock',
      img: Sheetrock
    },
    {
      title: 'Plastering',
      img: Plastering
    },
    {
      title: 'Plumbing',
      img: Plumbing
    },
    {
      title: 'Kitchen Remodeling',
      img: Kitchen
    },
    {
      title: " Painting",
      img: Painting
    }
  ]
  const services2 = [
    {
      title: 'Roofing',
      img: Roofing
    },
    {
      title: 'Pointing',
      img: Pointing2
    },
    {
      title: 'Water Proofing',
      img: Water
    },
    {
      title: 'Brown Stone Repair',
      img: Brown
    },
    {
      title: 'Brick Works',
      img: Brick
    },
    {
      title: " Power Wash",
      img: Power
    }
  ]

  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }


  return <div>OurOtherServicesSection OurOtherServicesSection</div>;
};

export default OurOtherServicesSection;
