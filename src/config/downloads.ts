export type Platform = 'windows' | 'macos' | 'android' | 'ios'
export interface DownloadEntry {
  platform: Platform
  label: string
  subtitle: string
  status: 'developing' | 'available'
  downloadUrl: string
}

export const downloadConfig: DownloadEntry[] = [
  { platform: 'windows', label: 'Windows 桌面版', subtitle: '把小小的陪伴，放在桌面上', status: 'developing', downloadUrl: '' },
  { platform: 'macos', label: 'macOS 桌面版', subtitle: '让灵感与温柔，一起发生', status: 'developing', downloadUrl: '' },
  { platform: 'android', label: 'Android 手机版', subtitle: '随时发消息，心意不缺席', status: 'developing', downloadUrl: '' },
  { platform: 'ios', label: 'iOS 手机版', subtitle: '装进口袋的，是一份惦念', status: 'developing', downloadUrl: '' },
]

export function getDownloadUrl(entry: DownloadEntry): string | null {
  if (entry.status !== 'available' || !entry.downloadUrl.trim()) return null
  try {
    const url = new URL(entry.downloadUrl)
    if (url.protocol !== 'https:' || url.username || url.password) return null
    return url.href
  } catch {
    return null
  }
}
