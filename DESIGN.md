# Design reference

The visual source is https://unist.info/, rather than a third-party gallery template. The public WordPress layout was inspected and captured through a normal browser; WordPress internals and its database were not exported.

- White background; dark navy accent `#001b54`, body gray `#666`, links `#2ea3f2`.
- Original lab logo, stored locally with the original aspect ratio. White fixed header, 80px tall; desktop logo 194×64px. Header content is 80% wide, capped at 1080px. Arimo semibold navigation at 18px, Open Sans body at 14px/1.7.
- Home column: 60% desktop width, 1080px maximum. Hero and activity slides have a 1.66 aspect ratio, rounded 10px corners, and a subtle shadow. The slide captions remain part of their source images.
- Home retains the source order: research highlights, News, Announcement, Research Interests, Activities. News uses an outlined panel, 16px text, and the source paragraph grouping.
- Inner pages use an 80% column capped at 1080px; navy centered underlined page titles; grouped sections and substantial whitespace. News alternates a quarter-width image and text. Publications retain year/type grouping and image/text rows. Members and equipment use four-column grids.
- Mobile: navigation collapses below 850px; submenus have explicit controls. Member/equipment grids reduce to two columns; image/text rows stack below 550px. Long emails and titles wrap. Dialogs are scrollable.
- Keyboard: skip link, focus indicators, native dialogs, named carousel controls and left/right keys. Automatic slides pause on focus/hover and honor reduced motion. Converted animations use muted looping MP4 with local posters; reduced motion presents playback controls.
- Preview adds a narrow review notice and `noindex,nofollow`; production removes both and uses the root domain canonical URLs.
- Instagram uses official embeds. Their own visual appearance may differ from the old WordPress plugin. Every embed has a permanent post link as a loading/error fallback.

Site CSS and components are authored for this migration. WordPress plugin scripts/styles are not bundled. All publication metadata, source dates, and member statuses remain source statements. Only the documented obvious spelling corrections were applied.
