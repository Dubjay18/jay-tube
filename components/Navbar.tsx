"use client";
import { Menu, Mic, Video, Bell } from "lucide-react";
import React from "react";
import Cgb from "./Cgb";
import { Button } from "./ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./ui/avatar";
import { Input } from "./ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Label } from "./ui/label";

function Navbar() {
  return (
    <div className='flex items-center justify-between py-4 px-2 bg-background'>
      <div className='flex items-center gap-4'>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"ghost"}>
              <Menu className='h-[1.2rem] w-[1.2rem] text-white' />
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click
                save when you&apos;re done.
              </SheetDescription>
            </SheetHeader>
            <div className='grid gap-4 py-4'>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label
                  htmlFor='name'
                  className='text-right'>
                  Name
                </Label>
                <Input
                  id='name'
                  value='Pedro Duarte'
                  className='col-span-3'
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label
                  htmlFor='username'
                  className='text-right'>
                  Username
                </Label>
                <Input
                  id='username'
                  value='@peduarte'
                  className='col-span-3'
                />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type='submit'>Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        <h1>Jaytube</h1>
      </div>
      <div className='flex items-center gap-3'>
        <div className='flex w-full max-w-sm items-center space-x-2'>
          <Input
            type='text'
            placeholder='Search'
            className='md:w-64'
          />
          <Button type='submit' variant={"default"}>
            Search
          </Button>
        </div>
        <Button
          variant={"outline"}
          className='rounded-full w-fit'>
          <Mic className='h-[1.2rem] w-[1.2rem] text-white' />
        </Button>
      </div>
      <div className='flex items-center gap-4'>
        <Button variant={"ghost"}>
          {" "}
          <Video className='h-[1.2rem] w-[1.2rem] text-white' />
        </Button>
        <Button variant={"ghost"}>
          {" "}
          <Bell className='h-[1.2rem] w-[1.2rem] text-white' />
        </Button>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default Navbar;
