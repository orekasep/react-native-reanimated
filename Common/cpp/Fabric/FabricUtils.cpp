#ifdef RCT_NEW_ARCH_ENABLED

#if REACT_NATIVE_MINOR_VERSION < 69
#error \
    "Reanimated 3 does not support React Native 0.68.x when Fabric is enabled. Please upgrade to React Native 0.69.0 or newer if you want to use Reanimated with the new architecture."
#endif

#include "FabricUtils.h"

#include <react/renderer/debug/SystraceSection.h>
#include <react/renderer/uimanager/UIManagerBinding.h>

using namespace facebook::react;

namespace reanimated {

#ifdef ANDROID
RuntimeExecutor getRuntimeExecutorFromBinding(Binding *binding) {
  BindingPublic *bindingPublic = reinterpret_cast<BindingPublic *>(binding);
  SchedulerPublic *schedulerPublic =
      reinterpret_cast<SchedulerPublic *>((bindingPublic->scheduler_).get());
  return schedulerPublic->runtimeExecutor_;
}
#endif

std::shared_ptr<const ContextContainer> getContextContainerFromUIManager(
    const UIManager *uiManager) {
  return reinterpret_cast<const UIManagerPublic *>(uiManager)
      ->contextContainer_;
}

} // namespace reanimated

#endif // RCT_NEW_ARCH_ENABLED
