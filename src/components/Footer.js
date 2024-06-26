import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='Footer bg-slate-300'>
            <footer class="border-t border-black dark:border-white">
                {/* <footer class="shadow-md"> */}
                <div class="max-w-6xl mx-auto space-y-16 px-6 py-16 text-gray-600 2xl:px-0">
                    <div class="flex flex-wrap items-center justify-between gap-4 border-b pb-8 border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
                        <Link to="/" aria-label="QuesyQuest logo">
                            <img
                                className="w-28 h-16"
                                src="https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png"
                                alt=""
                            />
                        </Link>
                        <div class="flex gap-3">
                            <Link to="https://github.com/tailus-ui" target="blank" aria-label="github" class="size-8 flex *:m-auto rounded-[--btn-border-radius] text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">
                                <svg class="size-5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                </svg>
                            </Link>
                            <Link to="https://twitter.com/tailus_ui" target="blank" aria-label="twitter" class="size-8 flex *:m-auto rounded-[--btn-border-radius] text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">
                                <svg class="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"></path>
                                </svg>

                            </Link>
                            <Link to="https://youtube.com/@tailus-ui" target="blank" aria-label="medium" class="size-8 flex *:m-auto rounded-[--btn-border-radius] text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">
                                <svg class="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"></path></svg>
                            </Link>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-6 sm:grid-cols-4">
                        <div>
                            <span class="font-medium text-gray-950 dark:text-white">Enterprise</span>
                            <ul class="mt-4 list-inside space-y-4">
                                <li>
                                    <Link to="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">About</Link>
                                </li>
                                <li>
                                    <Link to="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Customers</Link>
                                </li>
                                <li>
                                    <Link to="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Enterprise</Link>
                                </li>
                                <li>
                                    <Link to="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Partners</Link>
                                </li>
                                <li>
                                    <Link to="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Jobs</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <span class="text-sm font-medium text-gray-950 dark:text-white">Product</span>
                            <ul class="mt-4 list-inside space-y-4">
                                <li>
                                    <Link to="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Security</Link>
                                </li>
                                <li>
                                    <Link to="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Customization</Link>
                                </li>
                                <li>
                                    <Link to="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Enterprise</Link>
                                </li>
                                <li>
                                    <Link to="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Partners</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <span class="text-sm font-medium text-gray-950 dark:text-white">Docs</span>
                            <ul class="mt-4 list-inside space-y-4">
                                <li>
                                    <Link to="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Introduction</Link>
                                </li>
                                <li>
                                    <Link to="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Installation</Link>
                                </li>
                                <li>
                                    <Link to="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Utils</Link>
                                </li>
                                <li>
                                    <Link to="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Principles</Link>
                                </li>
                                <li>
                                    <Link to="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Jargon</Link>
                                </li>
                                <li>
                                    <Link to="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Plugin</Link>
                                </li>
                                <li>
                                    <Link to="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Customizer</Link>
                                </li>
                                <li>
                                    <Link to="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Boilerplates</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <span class="text-sm font-medium text-gray-950 dark:text-white">Community</span>
                            <ul class="mt-4 list-inside space-y-4">
                                <li>
                                    <Link to="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">GitHub</Link>
                                </li>
                                <li>
                                    <Link to="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Discord</Link>
                                </li>
                                <li>
                                    <Link to="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Slack</Link>
                                </li>
                                <li>
                                    <Link to="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">X / Twitter</Link>
                                </li>
                            </ul>

                            {/* <form class="mt-12 max-w-xs w-full">
                        <div class="space-y-2.5 has-[:disabled]:has-[:where(label,span)]:select-none has-[:disabled]:has-[:where(label,span)]:opacity-50 text-gray-950 dark:text-white has-[:disabled]:has-[:where(label,span)]:text-gray-600 dark:has-[:disabled]:has-[:where(label,span)]:text-gray-400">
                            <label class="block font-medium text-sm" for="email">Subscribe to our newsletter</label>
                            <input class="w-full focus:outline rounded-[--field-border-radius] appearance-none transition duration-300 peer border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-primary-600 shadow-gray-700/5 border-[--field-light-border-color] hover:border-[--field-light-border-hover-color] placeholder-gray-400 text-gray-700 dark:bg-[--field-dark-bg] dark:focus:bg-[--field-dark-focus-bg] dark:outline-primary-500 dark:shadow-gray-950/40 dark:border-[--field-dark-border-color] dark:hover:border-[--field-dark-border-hover-color] dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-base h-9 px-3" placeholder="Your email" type="email" id="email" required="" name="email"/>
                            <span class="hidden peer-disabled:text-gray-600 dark:peer-disabled:text-gray-400 text-gray-500 dark:text-gray-400 text-sm">Helper message</span>
                        </div>
                        <button type="submit" class="mt-3 w-full h-9 lg:w-fit group flex items-center relative border rounded-[--btn-border-radius] *:select-none [&amp;>*:not(.sr-only)]:relative before:rounded-[calc(var(--btn-border-radius)-1px)] before:absolute before:inset-0 before:border before:bg-gradient-to-b *:disabled:opacity-20 disabled:text-gray-950/40 disabled:border-gray-200 disabled:bg-gray-100 disabled:*:text-gray-300 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:before:border-0 dark:before:border-t dark:before:shadow-inner dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 disabled:dark:*:text-gray-700 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none dark:*:disabled:!text-white text-white border-gray-950 bg-gray-600 before:border-gray-600 before:from-gray-800 hover:bg-gray-900 active:bg-gray-950 dark:text-gray-950 dark:before:border-gray-200 dark:before:from-gray-200 dark:bg-white dark:before:shadow-white/10 dark:hover:bg-gray-100 dark:active:bg-gray-300 dark:active:before:from-gray-200 lg:text-sm lg:h-8 px-3 justify-center">
                            <span>Subscribe</span>
                        </button>
                    </form> */}
                        </div>
                    </div>
                    {/* <div class="flex items-center justify-between rounded-md bg-gray-100 px-6 py-3 dark:bg-gray-900">
                <span class="text-gray-600 dark:text-gray-400">© tailus 2021 - Present</span>
                <Link to="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Licence</Link>
            </div> */}
                </div>
            </footer>
        </div>
    )
}
