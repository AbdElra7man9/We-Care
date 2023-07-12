import React from 'react'
import Banner from '../Banner'
import { BsArrowRightShort } from 'react-icons/bs'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@Components/ui/accordion.tsx'

export default function page() {

  const Title = ({ title }: { title: string }) => {
    return (
      <div className='flex items-center gap-3'>
        <BsArrowRightShort size={20} />
        <p>{title}</p>
      </div>
    )
  }
  const AccordionJSX = ({ title, content }: { title: string, content: string }) => {
    return (
      <Accordion
        type='single'
        collapsible
        className='relative z-40 shadow overflow-hidden'>
        <AccordionItem value='item-1' className='!border-none overflow-hidden'>
          <div className='w-full bg-white border border-gray-200 rounded-md overflow-hidden dark:bg-slate-900 dark:border-slate-600'>
            <div className='w-full h-full flex flex-col'>
              <AccordionTrigger className='px-6 text-blue-600'>
                <p>{title}</p>
              </AccordionTrigger>
              <AccordionContent>
                <p className='p-5 text-gray-400 dark:text-slte-500'>{content}</p>
              </AccordionContent>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    )
  }

  return (
    <div>
      <Banner
        title='Terms & Policy'
        str1='Great doctor if you need your family member to get effective immediate assistance, emergency'
        str2='treatment or a simple consultation.'
        pageLink='Terms & Policy'

        isdate={false}
      />
      <div className='container max-w-4xl shadow-[.2px_.2px_3px_1px] dark:shadow-slate-700 shadow-gray-100 p-5 rounded-lg'>
        <div className='flex flex-col gap-4'>
          <p className='text-lg font-semibold dark:text-slate-100'>Introduction :</p>
          <p className='text-gray-400 flex flex-col gap-y-4 text-sm dark:text-slate-500 leading-loose'>
            {`IIt seems that only fragments of the original text remain in the Lorem Ipsum texts used today. 
              One may speculate that over the course of time certain letters were added or deleted at various positions within the text.`}
          </p>
          <p className='text-lg font-semibold dark:text-slate-100'>User Agreements :</p>
          <div className='text-gray-400 flex flex-col gap-y-4 text-sm dark:text-slate-500 leading-loose'>
            <p>
              {`The most well-known dummy text is the 'Lorem Ipsum',
               which is said to have originated in the 16th century.
                Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. 
                It contains a series of real Latin words. This ancient dummy text is also incomprehensible, 
                but it imitates the rhythm of most European languages in Latin script. 
                The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is t
                hat the text does not attract attention to itself or distract the viewer's attention from the layout.`}
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
            <p>
              {`It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. \
              One may speculate that over the course of time certain letters 
              were added or deleted at various positions within the text.`}
            </p>
          </div>
          <p className='text-lg font-medium dark:text-slate-100'>Restrictions :</p>
          <p>You are specifically restricted from all of the following :</p>
          <div className='flex text-sm flex-col gap-y-3 text-gray-400 dark:text-slate-500'>
            <Title title='Digital Marketing Solutions for Tomorrow' />
            <Title title='Our Talented & Experienced Marketing Agency' />
            <Title title='Create your own skin to match your brand' />
            <Title title='Digital Marketing Solutions for Tomorrow' />
            <Title title='Our Talented & Experienced Marketing Agency' />
            <Title title='Create your own skin to match your brand' />
          </div>
          <p className='text-lg font-medium dark:text-slate-100'>Users Question & Answer :</p>
          <div className='flex flex-col gap-y-4'>
            <AccordionJSX
              title='How does it work'
              content='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
            />
            <AccordionJSX
              title='Do I need a designer to use We Care ?'
              content='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
            />
            <AccordionJSX
              title='What do I need to do to start selling ?'
              content='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
            />
            <AccordionJSX
              title='What happens when I recieve an order ?'
              content='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
            />
          </div>

        </div>
      </div>
    </div>
  )
}
