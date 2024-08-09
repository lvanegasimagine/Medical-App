'use client'

import * as React from 'react'
// import Link from 'next/link'

import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'

const megaMenu = [
  {
    title: 'Doctors',
    services: [
      {
        title: 'Telehealth',
        slug: 'tele-health',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatem assumenda, dolorem explicabo quidem minus natus ut, labore accusantium, veritatis esse delectus? Nam quasi repellat libero quisquam, magni aliquid labore?'
      },
      {
        title: 'Video presciption refill',
        slug: 'video-prescription-refill',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate nihil ad autem fugit, accusantium non sint placeat accusamus? Reiciendis eveniet ad earum incidunt voluptate fuga nihil tenetur placeat? Unde!'
      },
      {
        title: 'In-Person doctor visit',
        slug: 'In-Person-doctor-visit',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, autem?'
      },
      {
        title: 'Virtual doctor visit',
        slug: 'virtual-doctor-visit',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, autem?'
      },
      {
        title: 'UTI Consult',
        slug: 'uti-consult',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, autem?'
      }

    ]
  },
  {
    title: 'Top Booked',
    services: [
      {
        title: 'Telehealth',
        slug: 'tele-health',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatem assumenda, dolorem explicabo quidem minus natus ut, labore accusantium, veritatis esse delectus? Nam quasi repellat libero quisquam, magni aliquid labore?'
      },
      {
        title: 'Video presciption refill',
        slug: 'video-prescription-refill',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate nihil ad autem fugit, accusantium non sint placeat accusamus? Reiciendis eveniet ad earum incidunt voluptate fuga nihil tenetur placeat? Unde!'
      },
      {
        title: 'In-Person doctor visit',
        slug: 'In-Person-doctor-visit',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, autem?'
      },
      {
        title: 'Virtual doctor visit',
        slug: 'virtual-doctor-visit',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, autem?'
      },
      {
        title: 'UTI Consult',
        slug: 'uti-consult',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, autem?'
      }

    ]
  },
  {
    title: 'Specialist',
    services: [
      {
        title: 'Telehealth',
        slug: 'tele-health',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatem assumenda, dolorem explicabo quidem minus natus ut, labore accusantium, veritatis esse delectus? Nam quasi repellat libero quisquam, magni aliquid labore?'
      },
      {
        title: 'Video presciption refill',
        slug: 'video-prescription-refill',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate nihil ad autem fugit, accusantium non sint placeat accusamus? Reiciendis eveniet ad earum incidunt voluptate fuga nihil tenetur placeat? Unde!'
      },
      {
        title: 'In-Person doctor visit',
        slug: 'In-Person-doctor-visit',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, autem?'
      },
      {
        title: 'Virtual doctor visit',
        slug: 'virtual-doctor-visit',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, autem?'
      },
      {
        title: 'UTI Consult',
        slug: 'uti-consult',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, autem?'
      }

    ]
  },
  {
    title: 'Symptoms',
    services: [
      {
        title: 'Telehealth',
        slug: 'tele-health',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatem assumenda, dolorem explicabo quidem minus natus ut, labore accusantium, veritatis esse delectus? Nam quasi repellat libero quisquam, magni aliquid labore?'
      },
      {
        title: 'Video presciption refill',
        slug: 'video-prescription-refill',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate nihil ad autem fugit, accusantium non sint placeat accusamus? Reiciendis eveniet ad earum incidunt voluptate fuga nihil tenetur placeat? Unde!'
      },
      {
        title: 'In-Person doctor visit',
        slug: 'In-Person-doctor-visit',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, autem?'
      },
      {
        title: 'Virtual doctor visit',
        slug: 'virtual-doctor-visit',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, autem?'
      },
      {
        title: 'UTI Consult',
        slug: 'uti-consult',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, autem?'
      }

    ]
  }
]

export default function MegaMenu () {
  return (
    <NavigationMenu>
      <NavigationMenuList className='space-x-4'>
        {megaMenu.map((item, i) => (
          <NavigationMenuItem key={i}>
          <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px">
              {item.services.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={`/services/${component.slug}`}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
React.ElementRef<'a'>,
React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
