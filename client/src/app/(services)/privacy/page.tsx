import React from 'react'
import Banner from '../Banner'
import { BsArrowRightShort } from 'react-icons/bs'

export default function page() {
  const Title = ({ title }: { title: string }) => {
    return (
      <div className='flex items-center gap-3'>
        <BsArrowRightShort size={20} />
        <p>{title}</p>
      </div>
    )
  }

  return (
    <div>
      <Banner
        title='Terms & Policy'
        str1='Great doctor if you need your family member to get effective immediate assistance, emergency'
        str2='treatment or a simple consultation.'
        pageLink='Privacy & Security'
        isdate={false}
      />
      <div className='container max-w-4xl shadow-[.2px_.2px_3px_1px] dark:shadow-slate-700 shadow-gray-100 p-5 rounded-lg'>
        <div className='flex flex-col gap-4'>
          <p className='text-lg font-semibold dark:text-slate-100'>Overflow:</p>
          <div className='text-gray-400 flex flex-col gap-y-4 text-sm dark:text-slate-500 leading-loose'>
            <p>
              {`It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.
             One may speculate that over the course of time certain
              letters were added or deleted at various positions within the text.`}
            </p>
            <p>
              {`In the 1960s, the text suddenly became known beyond the professional circle of typesetters 
            and layout designers when it was used for Letraset sheets (adhesive letters on transparent film, p
            opular until the 1980s) Versions of the text were subsequently included in DTP programmes such as PageMaker etc.`}
            </p>
            <p>
              {`There is now an abundance of readable dummy texts.
             These are usually used when a text is required purely to fill a space. 
             These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, 
             funny or nonsensical stories.`}
            </p>
          </div>
          <p className='text-lg font-medium dark:text-slate-100'>We use your information to :</p>
          <div className='flex text-sm flex-col gap-y-3 text-gray-400 dark:text-slate-500'>
            <Title title='Digital Marketing Solutions for Tomorrow' />
            <Title title='Our Talented & Experienced Marketing Agency' />
            <Title title='Create your own skin to match your brand' />
            <Title title='Digital Marketing Solutions for Tomorrow' />
            <Title title='Our Talented & Experienced Marketing Agency' />
            <Title title='Create your own skin to match your brand' />
          </div>
          <p className='font-medium text-sm dark:text-slate-100'>Information Provided Voluntarily :</p>
          <p className='text-sm leading-loose text-gray-400 dark:text-slate-500'>
            {`In the 1960s, the text suddenly became known beyond the professional circle of typesetters
             and layout designers when it was used for Letraset sheets (adhesive letters on transparent film,
              popular until the 1980s) Versions of the text were subsequently included in DTP programmes such as PageMaker etc.`}
          </p>
        </div>
      </div>
    </div>
  )
}
