// A media element intentionally stops/restarts Range reads when it has enough buffered data or seeks.
// Never suppress a failed module, model, fetch(), HTTP error, or a media connection/decoder failure.
export function isStreamBufferAbort({ url, resourceType, error }, base) {
  return error === 'net::ERR_ABORTED' && resourceType === 'media' && url.startsWith(base)
    && /^assets\/audio\/music_(day|night|pulseA|pulseB)\.(ogg|m4a)$/.test(url.slice(base.length).split('?')[0]);
}
