/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PostsRouteImport } from './routes/posts/route'
import { Route as BlogRouteImport } from './routes/blog/route'
import { Route as IndexImport } from './routes/index'
import { Route as PostsIndexImport } from './routes/posts/index'
import { Route as BlogIndexImport } from './routes/blog/index'
import { Route as BlogStatsImport } from './routes/blog_/stats'
import { Route as BlogSlugImport } from './routes/blog/$slug'
import { Route as PostsPostIdIndexImport } from './routes/posts/$postId/index'
import { Route as PostsPostIdDeepImport } from './routes/posts/$postId/deep'

// Create/Update Routes

const PostsRouteRoute = PostsRouteImport.update({
  path: '/posts',
  getParentRoute: () => rootRoute,
} as any)

const BlogRouteRoute = BlogRouteImport.update({
  path: '/blog',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PostsIndexRoute = PostsIndexImport.update({
  path: '/',
  getParentRoute: () => PostsRouteRoute,
} as any)

const BlogIndexRoute = BlogIndexImport.update({
  path: '/',
  getParentRoute: () => BlogRouteRoute,
} as any)

const BlogStatsRoute = BlogStatsImport.update({
  path: '/blog/stats',
  getParentRoute: () => rootRoute,
} as any)

const BlogSlugRoute = BlogSlugImport.update({
  path: '/$slug',
  getParentRoute: () => BlogRouteRoute,
} as any)

const PostsPostIdIndexRoute = PostsPostIdIndexImport.update({
  path: '/$postId/',
  getParentRoute: () => PostsRouteRoute,
} as any)

const PostsPostIdDeepRoute = PostsPostIdDeepImport.update({
  path: '/$postId/deep',
  getParentRoute: () => PostsRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/blog': {
      id: '/blog'
      path: '/blog'
      fullPath: '/blog'
      preLoaderRoute: typeof BlogRouteImport
      parentRoute: typeof rootRoute
    }
    '/posts': {
      id: '/posts'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof PostsRouteImport
      parentRoute: typeof rootRoute
    }
    '/blog/$slug': {
      id: '/blog/$slug'
      path: '/$slug'
      fullPath: '/blog/$slug'
      preLoaderRoute: typeof BlogSlugImport
      parentRoute: typeof BlogRouteImport
    }
    '/blog/stats': {
      id: '/blog/stats'
      path: '/blog/stats'
      fullPath: '/blog/stats'
      preLoaderRoute: typeof BlogStatsImport
      parentRoute: typeof rootRoute
    }
    '/blog/': {
      id: '/blog/'
      path: '/'
      fullPath: '/blog/'
      preLoaderRoute: typeof BlogIndexImport
      parentRoute: typeof BlogRouteImport
    }
    '/posts/': {
      id: '/posts/'
      path: '/'
      fullPath: '/posts/'
      preLoaderRoute: typeof PostsIndexImport
      parentRoute: typeof PostsRouteImport
    }
    '/posts/$postId/deep': {
      id: '/posts/$postId/deep'
      path: '/$postId/deep'
      fullPath: '/posts/$postId/deep'
      preLoaderRoute: typeof PostsPostIdDeepImport
      parentRoute: typeof PostsRouteImport
    }
    '/posts/$postId/': {
      id: '/posts/$postId/'
      path: '/$postId'
      fullPath: '/posts/$postId'
      preLoaderRoute: typeof PostsPostIdIndexImport
      parentRoute: typeof PostsRouteImport
    }
  }
}

// Create and export the route tree

interface BlogRouteRouteChildren {
  BlogSlugRoute: typeof BlogSlugRoute
  BlogIndexRoute: typeof BlogIndexRoute
}

const BlogRouteRouteChildren: BlogRouteRouteChildren = {
  BlogSlugRoute: BlogSlugRoute,
  BlogIndexRoute: BlogIndexRoute,
}

const BlogRouteRouteWithChildren = BlogRouteRoute._addFileChildren(
  BlogRouteRouteChildren,
)

interface PostsRouteRouteChildren {
  PostsIndexRoute: typeof PostsIndexRoute
  PostsPostIdDeepRoute: typeof PostsPostIdDeepRoute
  PostsPostIdIndexRoute: typeof PostsPostIdIndexRoute
}

const PostsRouteRouteChildren: PostsRouteRouteChildren = {
  PostsIndexRoute: PostsIndexRoute,
  PostsPostIdDeepRoute: PostsPostIdDeepRoute,
  PostsPostIdIndexRoute: PostsPostIdIndexRoute,
}

const PostsRouteRouteWithChildren = PostsRouteRoute._addFileChildren(
  PostsRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/blog': typeof BlogRouteRouteWithChildren
  '/posts': typeof PostsRouteRouteWithChildren
  '/blog/$slug': typeof BlogSlugRoute
  '/blog/stats': typeof BlogStatsRoute
  '/blog/': typeof BlogIndexRoute
  '/posts/': typeof PostsIndexRoute
  '/posts/$postId/deep': typeof PostsPostIdDeepRoute
  '/posts/$postId': typeof PostsPostIdIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/blog/$slug': typeof BlogSlugRoute
  '/blog/stats': typeof BlogStatsRoute
  '/blog': typeof BlogIndexRoute
  '/posts': typeof PostsIndexRoute
  '/posts/$postId/deep': typeof PostsPostIdDeepRoute
  '/posts/$postId': typeof PostsPostIdIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/blog': typeof BlogRouteRouteWithChildren
  '/posts': typeof PostsRouteRouteWithChildren
  '/blog/$slug': typeof BlogSlugRoute
  '/blog/stats': typeof BlogStatsRoute
  '/blog/': typeof BlogIndexRoute
  '/posts/': typeof PostsIndexRoute
  '/posts/$postId/deep': typeof PostsPostIdDeepRoute
  '/posts/$postId/': typeof PostsPostIdIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/blog'
    | '/posts'
    | '/blog/$slug'
    | '/blog/stats'
    | '/blog/'
    | '/posts/'
    | '/posts/$postId/deep'
    | '/posts/$postId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/blog/$slug'
    | '/blog/stats'
    | '/blog'
    | '/posts'
    | '/posts/$postId/deep'
    | '/posts/$postId'
  id:
    | '__root__'
    | '/'
    | '/blog'
    | '/posts'
    | '/blog/$slug'
    | '/blog/stats'
    | '/blog/'
    | '/posts/'
    | '/posts/$postId/deep'
    | '/posts/$postId/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  BlogRouteRoute: typeof BlogRouteRouteWithChildren
  PostsRouteRoute: typeof PostsRouteRouteWithChildren
  BlogStatsRoute: typeof BlogStatsRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  BlogRouteRoute: BlogRouteRouteWithChildren,
  PostsRouteRoute: PostsRouteRouteWithChildren,
  BlogStatsRoute: BlogStatsRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/blog",
        "/posts",
        "/blog/stats"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/blog": {
      "filePath": "blog/route.tsx",
      "children": [
        "/blog/$slug",
        "/blog/"
      ]
    },
    "/posts": {
      "filePath": "posts/route.tsx",
      "children": [
        "/posts/",
        "/posts/$postId/deep",
        "/posts/$postId/"
      ]
    },
    "/blog/$slug": {
      "filePath": "blog/$slug.tsx",
      "parent": "/blog"
    },
    "/blog/stats": {
      "filePath": "blog_/stats.tsx"
    },
    "/blog/": {
      "filePath": "blog/index.tsx",
      "parent": "/blog"
    },
    "/posts/": {
      "filePath": "posts/index.tsx",
      "parent": "/posts"
    },
    "/posts/$postId/deep": {
      "filePath": "posts/$postId/deep.tsx",
      "parent": "/posts"
    },
    "/posts/$postId/": {
      "filePath": "posts/$postId/index.tsx",
      "parent": "/posts"
    }
  }
}
ROUTE_MANIFEST_END */
