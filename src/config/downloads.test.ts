import { describe, expect, it } from 'vitest'
import { downloadConfig, getDownloadUrl, type DownloadEntry } from './downloads'

const entry: DownloadEntry = { platform: 'windows', label: 'Windows 桌面版', subtitle: '', status: 'available', downloadUrl: 'https://downloads.starisle.test/app.exe' }

describe('download configuration', () => {
  it('contains all four planned platforms without pretending to ship installers', () => {
    expect(downloadConfig.map(item => item.platform)).toEqual(['windows', 'macos', 'android', 'ios'])
    for (const item of downloadConfig) {
      expect(item.status).toBe('developing')
      expect(item.downloadUrl).toBe('')
      expect(getDownloadUrl(item)).toBeNull()
    }
  })
  it('never exposes a download while the platform is developing', () => {
    expect(getDownloadUrl({ ...entry, status: 'developing' })).toBeNull()
  })
  it('permits a real absolute HTTPS address only for an available platform', () => {
    expect(getDownloadUrl(entry)).toBe(entry.downloadUrl)
  })
  it.each(['', ' ', '/app.exe', 'not-a-url', 'http://downloads.starisle.test/app.exe', 'javascript:alert(1)', 'data:text/html,test', 'file:///app.exe', 'https://user:secret@downloads.starisle.test/app.exe'])('rejects unsafe or malformed URL: %s', downloadUrl => {
    expect(getDownloadUrl({ ...entry, downloadUrl })).toBeNull()
  })
})
