$('#thisiswhatiwanttohaveahover').hover(function() {
  if ($(this + ' .tooltip').hasClass('hidden')) {
    $(this + ' .tooltip').removeClass('hidden');
    $(this + ' .tooltip').addClass('visible');
  }
  if ($(this + ' .tooltip').hasClass('visible')) {
    $(this + ' .tooltip').removeClass('visible');
    $(this + ' .tooltip').addClass('hidden');
  }
});
