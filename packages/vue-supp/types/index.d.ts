import { Slots } from 'vue'

export type Dictionary<T> = Record<string, T>

export type ObjectItemKey =
  | string
  | (string | number)[]
  | ((item: Dictionary<any>, fallback?: any) => any)

export type Data = Record<string, unknown>

export type EmitFn = (event: string, ...args: unknown[]) => void

export type MaybeRef<T> = T | Ref<T> | ComputedRef<T>

/* eslint-disable no-use-before-define */

export interface TouchHandlers {
  start?: (wrapperEvent: TouchEvent & TouchWrapper) => void
  end?: (wrapperEvent: TouchEvent & TouchWrapper) => void
  move?: (wrapperEvent: TouchEvent & TouchWrapper) => void
  left?: (wrapper: TouchWrapper) => void
  right?: (wrapper: TouchWrapper) => void
  up?: (wrapper: TouchWrapper) => void
  down?: (wrapper: TouchWrapper) => void
}

export interface TouchWrapper extends TouchHandlers {
  touchstartX: number
  touchstartY: number
  touchmoveX: number
  touchmoveY: number
  touchendX: number
  touchendY: number
  offsetX: number
  offsetY: number
}

export type TouchValue = TouchHandlers & {
  parent?: boolean
  options?: AddEventListenerOptions
}

/* eslint-enable no-use-before-define */
